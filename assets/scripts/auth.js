const API_BASE_URL = 'http://localhost:3000';

function mostrarMensagem(elementoId, mensagem, tipo = 'success') {
    const elemento = document.getElementById(elementoId);
    if (elemento) {
        elemento.textContent = mensagem;
        elemento.className = `alert alert-${tipo}`;
        elemento.classList.remove('d-none');
        setTimeout(() => elemento.classList.add('d-none'), 5000);
    }
}

// Funções de Gerenciamento de Sessão
function salvarUsuarioLogado(usuario) {
    sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
}

function getUsuarioLogado() {
    const usuario = sessionStorage.getItem('usuarioLogado');
    return usuario ? JSON.parse(usuario) : null;
}

function removerUsuarioLogado() {
    sessionStorage.removeItem('usuarioLogado');
}

// Função para atualizar Navbar (declarada globalmente)
function atualizarNavbar() {
    const navList = document.getElementById('nav-list');
    const usuarioLogado = getUsuarioLogado();

    if (navList) {
        // Remover links de login/cadastro e logout/favoritos existentes para evitar duplicação
        const loginRegisterLink = navList.querySelector('a[href="login.html"]');
        if (loginRegisterLink) loginRegisterLink.parentElement.remove();
        const favoritosLink = navList.querySelector('#favoritos-link');
        if (favoritosLink) favoritosLink.parentElement.remove();
        const logoutLink = navList.querySelector('#logout-button');
        if (logoutLink) logoutLink.parentElement.remove();

        if (usuarioLogado) {
            // Adicionar link de Favoritos
            const favoritosItem = document.createElement('li');
            favoritosItem.className = 'nav-item';
            favoritosItem.innerHTML = `
                <a class="nav-link" href="favoritos.html" id="favoritos-link">
                    Favoritos
                </a>
            `;
            navList.appendChild(favoritosItem);
            document.getElementById('favoritos-link').addEventListener('click', (e) => {
                e.preventDefault();
                // Opcional: Aqui você pode adicionar lógica para carregar favoritos dinamicamente
                // ou apenas redirecionar, já que a página favoritos.html carrega por conta própria.
                window.location.href = 'favoritos.html';
            });

            // Adicionar link de Logout
            const logoutItem = document.createElement('li');
            logoutItem.className = 'nav-item';
            logoutItem.innerHTML = `
                <a class="nav-link" href="#" id="logout-button">
                    <i class="fas fa-sign-out-alt me-1"></i>Logout
                </a>
            `;
            navList.appendChild(logoutItem);
            document.getElementById('logout-button').addEventListener('click', (e) => {
                e.preventDefault();
                removerUsuarioLogado();
                atualizarNavbar(); // Atualiza a navbar após logout
                window.location.href = 'index.html'; // Redireciona
            });
        } else {
            // Adicionar link de Login
            const loginItem = document.createElement('li');
            loginItem.className = 'nav-item';
            loginItem.innerHTML = `
                <a class="nav-link" href="login.html">
                    <i class="fas fa-user me-1"></i>Login
                </a>
            `;
            navList.appendChild(loginItem);
        }
    }
}

// Função para atualizar estado dos ícones de favorito nos cards (declarada globalmente)
function atualizarIconesFavoritos() {
    const usuario = getUsuarioLogado();
    const favoritos = usuario ? usuario.favoritos : [];

    document.querySelectorAll('.favorito-wrapper').forEach(wrapper => {
        const receitaId = wrapper.dataset.receitaId;
        const icon = wrapper.querySelector('.favorito-icon');
        if (usuario) {
            icon.src = favoritos.includes(receitaId) ? 'assets/img/favoritado.png' : 'assets/img/desfavoritado.png';
        } else {
            // Se não houver usuário logado, todos aparecem como desfavoritados
            icon.src = 'assets/img/desfavoritado.png';
        }
    });
}

// Função para configurar event listeners dos favoritos (declarada globalmente)
function configurarFavoritosAutenticados() {
    document.querySelectorAll('.favorito-wrapper').forEach(wrapper => {
        const receitaId = wrapper.dataset.receitaId;
        const icon = wrapper.querySelector('.favorito-icon');

        wrapper.addEventListener('click', async (e) => {
            e.stopPropagation();
            e.preventDefault();
            const usuario = getUsuarioLogado();

            if (!usuario) {
                alert('Você precisa estar logado para favoritar receitas!');
                window.location.href = 'login.html';
                return;
            }

            let favoritosDoUsuario = usuario.favoritos || [];
            const isFavorito = favoritosDoUsuario.includes(receitaId);

            if (isFavorito) {
                favoritosDoUsuario = favoritosDoUsuario.filter(id => id !== receitaId);
            } else {
                favoritosDoUsuario.push(receitaId);
            }

            try {
                const response = await fetch(`${API_BASE_URL}/users/${usuario.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ favoritos: favoritosDoUsuario })
                });

                if (response.ok) {
                    usuario.favoritos = favoritosDoUsuario; // Atualiza o objeto do usuário na memória
                    salvarUsuarioLogado(usuario); // Atualiza na sessionStorage
                    atualizarIconesFavoritos(); // Atualiza a UI
                    // Opcional: mostrar mensagem de sucesso
                } else {
                    alert('Erro ao atualizar favoritos. Tente novamente.');
                }
            } catch (error) {
                console.error('Erro ao comunicar com o servidor de usuários:', error);
                alert('Erro de conexão ao atualizar favoritos.');
            }
        });
    });
}

// Lógica principal executada após o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
    // Lógica para Login
    const formLogin = document.getElementById('form-login');
    if (formLogin) {
        formLogin.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const senha = document.getElementById('login-senha').value;
            const mensagemLogin = document.getElementById('mensagem-login');

            try {
                const response = await fetch(`${API_BASE_URL}/users?email=${email}`);
                const users = await response.json();

                if (users.length > 0) {
                    const user = users[0];
                    if (user.senha === senha) {
                        salvarUsuarioLogado(user);
                        mostrarMensagem('mensagem-login', 'Login realizado com sucesso!', 'success');
                        window.location.href = 'index.html'; // Redirecionar para a página inicial
                    } else {
                        mostrarMensagem('mensagem-login', 'Senha incorreta.', 'danger');
                    }
                } else {
                    mostrarMensagem('mensagem-login', 'Usuário não encontrado.', 'danger');
                }
            } catch (error) {
                console.error('Erro no login:', error);
                mostrarMensagem('mensagem-login', 'Erro ao tentar fazer login. Tente novamente.', 'danger');
            }
        });
    }

    // Lógica para Cadastro de Usuário
    const formCadastro = document.getElementById('form-cadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nome = document.getElementById('cadastro-nome').value;
            const email = document.getElementById('cadastro-email').value;
            const senha = document.getElementById('cadastro-senha').value;
            const confirmarSenha = document.getElementById('cadastro-confirmar-senha').value;
            const mensagemCadastro = document.getElementById('mensagem-cadastro');

            if (senha !== confirmarSenha) {
                mostrarMensagem('mensagem-cadastro', 'As senhas não coincidem.', 'danger');
                return;
            }

            try {
                // Verificar se o email já existe
                const checkEmailResponse = await fetch(`${API_BASE_URL}/users?email=${email}`);
                const existingUsers = await checkEmailResponse.json();

                if (existingUsers.length > 0) {
                    mostrarMensagem('mensagem-cadastro', 'Este email já está cadastrado.', 'danger');
                    return;
                }

                const newUser = {
                    nome: nome,
                    email: email,
                    senha: senha, // Em um ambiente real, use hashing de senha!
                    favoritos: []
                };

                const response = await fetch(`${API_BASE_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                });

                if (response.ok) {
                    mostrarMensagem('mensagem-cadastro', 'Cadastro realizado com sucesso! Faça login.', 'success');
                    formCadastro.reset();
                    window.location.href = 'login.html'; // Redirecionar para a página de login
                } else {
                    mostrarMensagem('mensagem-cadastro', 'Erro ao cadastrar usuário. Tente novamente.', 'danger');
                }
            } catch (error) {
                console.error('Erro no cadastro:', error);
                mostrarMensagem('mensagem-cadastro', 'Erro ao tentar cadastrar. Tente novamente.', 'danger');
            }
        });
    }

    // Lógica de Logout
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            removerUsuarioLogado();
            window.location.href = 'index.html'; // Redirecionar para a página inicial ou login
        });
    }

    // Atualizar UI (Navbar e ícones de favoritos) nas páginas que a possuem
    atualizarNavbar();
    atualizarIconesFavoritos();
    configurarFavoritosAutenticados();
}); 