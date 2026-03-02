document.addEventListener('DOMContentLoaded', async function() {
    const receitasResponse = await fetch('http://localhost:3000/receitas');
    const receitas = await receitasResponse.json();

    const categoriasResponse = await fetch('http://localhost:3000/categorias');
    const categorias = await categoriasResponse.json();

    const categoriasCount = {};
    const tempos = {
        'Até 30 min': 0,
        '30 min - 1h': 0,
        '1h - 2h': 0,
        'Mais de 2h': 0
    };

    categorias.forEach(cat => {
        categoriasCount[cat.nome] = 0;
    });

    receitas.forEach(receita => {
        const categoria = categorias.find(cat => cat.valor === receita.categoria);
        if (categoria) {
            categoriasCount[categoria.nome]++;
        }

        const tempo = parseInt(receita.tempoPreparo);
        if (tempo <= 30) {
            tempos['Até 30 min']++;
        } else if (tempo <= 60) {
            tempos['30 min - 1h']++;
        } else if (tempo <= 120) {
            tempos['1h - 2h']++;
        } else {
            tempos['Mais de 2h']++;
        }
    });

    const categoriaCtx = document.getElementById('categoriaChart').getContext('2d');
    new Chart(categoriaCtx, {
        type: 'pie',
        data: {
            labels: Object.keys(categoriasCount),
            datasets: [{
                data: Object.values(categoriasCount),
                backgroundColor: [
                    '#e9a209',
                    '#ff6b6b',
                    '#4ecdc4',
                    '#45b7d1',
                    '#96ceb4'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Distribuição de Receitas por Categoria'
                }
            }
        }
    });

    const tempoCtx = document.getElementById('tempoChart').getContext('2d');
    new Chart(tempoCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(tempos),
            datasets: [{
                label: 'Quantidade de Receitas',
                data: Object.values(tempos),
                backgroundColor: '#e9a209'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Tempo de Preparo das Receitas'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

    const avaliacoesCtx = document.getElementById('avaliacoesChart').getContext('2d');
    
    const receitasAvaliadas = receitas.filter(r => r.avaliacao > 0);
    const labels = receitasAvaliadas.map(r => r.nome);
    const avaliacoes = receitasAvaliadas.map(r => r.avaliacao);
    const numAvaliacoes = receitasAvaliadas.map(r => r.numAvaliacoes);

    new Chart(avaliacoesCtx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Avaliação',
                    data: avaliacoes,
                    backgroundColor: 'rgba(233, 162, 9, 0.2)',
                    borderColor: '#e9a209',
                    borderWidth: 2
                },
                {
                    label: 'Número de Avaliações',
                    data: numAvaliacoes.map(n => n / 100), // Normalizando para melhor visualização
                    backgroundColor: 'rgba(255, 107, 107, 0.2)',
                    borderColor: '#ff6b6b',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Avaliações das Receitas'
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 5
                }
            }
        }
    });
}); 