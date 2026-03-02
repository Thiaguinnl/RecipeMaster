const dados = {
    "receitas": [
        {
            "id": "rec1",
            "titulo": "Sopa de Abóbora com Gengibre",
            "descricao": "Uma sopa cremosa e reconfortante, perfeita para os dias frios",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">800g de abóbora cabotiá ou moranga (descascada e cortada em cubos)</div>
                        <div class="border-bottom py-2 text-center">1 cebola média picada</div>
                        <div class="border-bottom py-2 text-center">2 dentes de alho picados</div>
                        <div class="border-bottom py-2 text-center">1 colher de sopa de gengibre fresco ralado</div>
                        <div class="border-bottom py-2 text-center">1 colher de sopa de azeite ou manteiga</div>
                        <div class="border-bottom py-2 text-center">1 litro de água ou caldo de legumes caseiro</div>
                        <div class="border-bottom py-2 text-center">Sal e pimenta-do-reino a gosto</div>
                        <div class="border-bottom py-2 text-center">(opcional) 100ml de creme de leite ou leite de coco</div>
                        <div class="py-2 text-center">(opcional) sementes de abóbora torradas para decorar</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">Em uma panela grande, aqueça o azeite ou manteiga.</div>
                        <div class="border-bottom py-2">Refogue a cebola e o alho até dourarem levemente.</div>
                        <div class="border-bottom py-2">Adicione o gengibre ralado e mexa por 1 minuto.</div>
                        <div class="border-bottom py-2">Coloque os cubos de abóbora e refogue por mais 3 minutos.</div>
                        <div class="border-bottom py-2">Acrescente a água ou caldo, tempere com sal e pimenta.</div>
                        <div class="border-bottom py-2">Cozinhe em fogo médio por cerca de 20-25 minutos, ou até a abóbora ficar bem macia.</div>
                        <div class="border-bottom py-2">Bata tudo no liquidificador (ou use um mixer direto na panela) até obter um creme liso.</div>
                        <div class="border-bottom py-2">Se quiser, adicione o creme de leite ou leite de coco para mais cremosidade e sabor.</div>
                        <div class="py-2">Ajuste o sal, sirva quente e finalize com sementes de abóbora ou um fio de azeite.</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 6 pessoas.</div>
                </div>
            `,
            "categoria": "Sopas",
            "destaque": true,
            "tempoPreparo": "45 minutos",
            "porcoes": "6 pessoas",
            "dificuldade": "Fácil",
            "imagem_principal": "/assets/img/front-view-tasty-potatoes-along-with-cooked-vegetables-inside-white-plate-brown-surface.jpg",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/top-view-delicious-soup-assortment.jpg",
                    "descricao": "Sopa servida"
                },
                {
                    "id": 2,
                    "src": "/assets/img/naturallis-63-61151af8212d9.jpg",
                    "descricao": "Com frango"
                },
                {
                    "id": 3,
                    "src": "/assets/img/3.SOPA-DE-ABOBORA-E-GENGIBRE.jpg",
                    "descricao": "Apresentação final"
                },
                {
                    "id": 4,
                    "src": "/assets/img/iStock-541305426.jpg",
                    "descricao": "Apenas abóbora"
                }
            ]
        },
        {
            "id": "rec2",
            "titulo": "Lasanha de Berinjela Low-Carb",
            "descricao": "A receita de lasanha é um prato clássico, muito amado e muito fácil de preparar",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">2 berinjelas médias cortadas em fatias finas no sentido do comprimento</div>
                        <div class="border-bottom py-2 text-center">300g de carne moída (patinho ou acém)</div>
                        <div class="border-bottom py-2 text-center">2 xícaras de molho de tomate caseiro ou sem açúcar</div>
                        <div class="border-bottom py-2 text-center">1/2 cebola picada</div>
                        <div class="border-bottom py-2 text-center">2 dentes de alho picados</div>
                        <div class="border-bottom py-2 text-center">1 colher de sopa de azeite</div>
                        <div class="border-bottom py-2 text-center">1 colher de chá de orégano</div>
                        <div class="border-bottom py-2 text-center">200g de queijo muçarela fatiado</div>
                        <div class="border-bottom py-2 text-center">100g de queijo parmesão ralado</div>
                        <div class="border-bottom py-2 text-center">Sal e pimenta-do-reino a gosto</div>
                        <div class="py-2 text-center">(opcional) folhas de manjericão fresco para finalizar</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">Preparar a berinjela:</div>
                        <div class="border-bottom py-2">Corte as berinjelas em fatias finas. Polvilhe sal e deixe "suar" por 10 minutos (isso tira o amargor). Enxugue com papel toalha. Grelhe as fatias em uma frigideira com um fio de azeite até dourarem dos dois lados. Reserve.</div>
                        <div class="border-bottom py-2">Molho de carne:</div>
                        <div class="border-bottom py-2">Em uma panela, refogue a cebola e o alho no azeite. Adicione a carne moída e cozinhe até dourar. Tempere com sal, pimenta e orégano. Acrescente o molho de tomate e deixe cozinhar por 5 minutos. Reserve.</div>
                        <div class="border-bottom py-2">Montagem da lasanha:</div>
                        <div class="border-bottom py-2">Em um refratário médio, faça camadas nessa ordem: 1 - Um pouco de molho de carne, 2 - Fatias de berinjela, 3 - Muçarela, 4 - Repita até acabar os ingredientes, 5 - Finalize com parmesão ralado.</div>
                        <div class="border-bottom py-2">Leve ao forno pré-aquecido a 200°C por 25 minutos ou até gratinar.</div>
                        <div class="py-2">Retire, decore com manjericão fresco e sirva quente.</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 4 pessoas.</div>
                </div>
            `,
            "categoria": "Pratos Principais",
            "destaque": true,
            "tempoPreparo": "1 hora e 10 minutos",
            "porcoes": "4 pessoas",
            "dificuldade": "Médio",
            "imagem_principal": "/assets/img/classic-lasagna-with-bolognese-sauce.jpg",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/vertical-shot-delicious-lasagna-white-plate.jpg",
                    "descricao": "Lasanha servida"
                },
                {
                    "id": 2,
                    "src": "/assets/img/lasanha-vegetariana-tratada-imkzxnu3.jpg",
                    "descricao": "Lasanha vegetariana"
                },
                {
                    "id": 3,
                    "src": "/assets/img/shutterstock-739787011.jpg",
                    "descricao": "Lasanha a bolonhesa"
                },
                {
                    "id": 4,
                    "src": "/assets/img/download-_1_.jpg",
                    "descricao": "Lasanha de cogumelos"
                }
            ]
        },
        {
            "id": "rec3",
            "titulo": "Tacos de Frango",
            "descricao": "Deliciosos tacos mexicanos com frango grelhado, abacate e coentro fresco",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">4 tortilhas de trigo ou milho</div>
                        <div class="border-bottom py-2 text-center">300g de peito de frango em tiras</div>
                        <div class="border-bottom py-2 text-center">1 abacate pequeno, maduro, cortado em fatias</div>
                        <div class="border-bottom py-2 text-center">1 tomate médio em cubos</div>
                        <div class="border-bottom py-2 text-center">1/2 cebola roxa fatiada finamente</div>
                        <div class="border-bottom py-2 text-center">1/2 xícara de folhas de coentro fresco</div>
                        <div class="border-bottom py-2 text-center">Suco de 1 limão</div>
                        <div class="border-bottom py-2 text-center">1 colher de sopa de azeite de oliva</div>
                        <div class="border-bottom py-2 text-center">1 colher de chá de páprica defumada</div>
                        <div class="border-bottom py-2 text-center">1/2 colher de chá de cominho em pó</div>
                        <div class="py-2 text-center">Sal e pimenta-do-reino a gosto</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">Tempere o frango com sal, pimenta, páprica, cominho e o suco de meio limão.</div>
                        <div class="border-bottom py-2">Em uma frigideira, aqueça o azeite e grelhe o frango até dourar e ficar suculento (cerca de 10 minutos).</div>
                        <div class="border-bottom py-2">Enquanto isso, aqueça rapidamente as tortilhas em outra frigideira ou no micro-ondas.</div>
                        <div class="border-bottom py-2">Monte os tacos:</div>
                        <div class="border-bottom py-2">Coloque as tiras de frango grelhado,</div>
                        <div class="border-bottom py-2">Adicione fatias de abacate,</div>
                        <div class="border-bottom py-2">Cubinhos de tomate,</div>
                        <div class="border-bottom py-2">Cebola roxa em tiras,</div>
                        <div class="py-2">Finalize com bastante coentro fresco e um pouco mais de limão espremido.</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 2 pessoas (4 tacos). Se quiser dobrar a receita, é só ajustar as quantidades.</div>
                </div>
            `,
            "categoria": "Pratos Principais",
            "destaque": false,
            "tempoPreparo": "25 minutos",
            "porcoes": "2 pessoas",
            "dificuldade": "Fácil",
            "imagem_principal": "/assets/img/delicious-chicken-tacos-with-avocado-cilantro_632498-24820-removebg-preview.png",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/tacos-frango.jpg",
                    "descricao": "Prato pronto"
                },
                {
                    "id": 2,
                    "src": "/assets/img/Tacos-de-frango-com-guacamole-e-sour-cream-G-1.jpg",
                    "descricao": "Tacos de Frango com guacamole"
                },
                {
                    "id": 3,
                    "src": "/assets/img/347923-original.jpg",
                    "descricao": "Tacos Mexicanos originais"
                },
                {
                    "id": 4,
                    "src": "/assets/img/001_Tacos_de_carnitas,_carne_asada_y_al_pastor.jpg",
                    "descricao": "Empratamento dos tacos"
                }
            ]
        },
        {
            "id": "rec4",
            "titulo": "Pizza de Pepperoni Clássica",
            "descricao": "Uma deliciosa pizza italiana com pepperoni crocante e queijo derretido",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">Para a massa:</div>
                        <div class="border-bottom py-2 text-center">3 xícaras de farinha de trigo</div>
                        <div class="border-bottom py-2 text-center">1 colher de chá de sal</div>
                        <div class="border-bottom py-2 text-center">1 colher de chá de açúcar</div>
                        <div class="border-bottom py-2 text-center">2 1/4 colheres de chá de fermento biológico seco</div>
                        <div class="border-bottom py-2 text-center">2 colheres de sopa de azeite de oliva</div>
                        <div class="border-bottom py-2 text-center">1 xícara de água morna</div>
                        <div class="border-bottom py-2 text-center">Para a cobertura:</div>
                        <div class="border-bottom py-2 text-center">1 xícara de molho de tomate para pizza</div>
                        <div class="border-bottom py-2 text-center">2 xícaras de queijo muçarela ralado</div>
                        <div class="border-bottom py-2 text-center">100g de pepperoni fatiado</div>
                        <div class="py-2 text-center">Orégano e azeite de oliva a gosto</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">1. Em uma tigela grande, misture a farinha, sal e açúcar.</div>
                        <div class="border-bottom py-2">2. Em outra tigela, dissolva o fermento na água morna e deixe descansar por 5 minutos.</div>
                        <div class="border-bottom py-2">3. Adicione o azeite à mistura do fermento.</div>
                        <div class="border-bottom py-2">4. Faça um buraco no centro dos ingredientes secos e adicione a mistura líquida.</div>
                        <div class="border-bottom py-2">5. Misture até formar uma massa homogênea.</div>
                        <div class="border-bottom py-2">6. Sove a massa por 10 minutos até ficar lisa e elástica.</div>
                        <div class="border-bottom py-2">7. Deixe a massa descansar por 1 hora ou até dobrar de tamanho.</div>
                        <div class="border-bottom py-2">8. Abra a massa em formato circular e transfira para uma forma.</div>
                        <div class="border-bottom py-2">9. Espalhe o molho de tomate, queijo muçarela e pepperoni.</div>
                        <div class="border-bottom py-2">10. Asse em forno preaquecido a 220°C por 15-20 minutos.</div>
                        <div class="py-2">11. Finalize com orégano e um fio de azeite.</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 8 fatias.</div>
                </div>
            `,
            "categoria": "Pratos Principais",
            "destaque": true,
            "tempoPreparo": "1 hora e 30 minutos",
            "porcoes": "8 fatias",
            "dificuldade": "Médio",
            "imagem_principal": "/assets/img/slice-crispy-pizza-with-meat-cheese.jpg",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/pizza-de-pepperoni-caseira-portal-minha-receita.jpg",
                    "descricao": "Pizza pepperoni servida"
                },
                {
                    "id": 2,
                    "src": "/assets/img/MHEB7V2WRFDVHBXPFP6RFYZ66U.jpg",
                    "descricao": "Pizza de napolitana"
                },
                {
                    "id": 3,
                    "src": "/assets/img/pizza_caseira_marguerita.webp",
                    "descricao": "Pizza marguerita"
                },
                {
                    "id": 4,
                    "src": "/assets/img/pizza-doce-capa.webp",
                    "descricao": "Pizza doce"
                }
            ]
        },
        {
            "id": "rec5",
            "titulo": "Homus Caseiro com Azeite e Pita Chips",
            "descricao": "Pasta cremosa de grão-de-bico com tahine e limão, acompanhada de chips de pão pita",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">Para o homus:</div>
                        <div class="border-bottom py-2 text-center">2 xícaras de grão-de-bico cozido</div>
                        <div class="border-bottom py-2 text-center">1/4 xícara de tahine</div>
                        <div class="border-bottom py-2 text-center">Suco de 1 limão</div>
                        <div class="border-bottom py-2 text-center">2 dentes de alho</div>
                        <div class="border-bottom py-2 text-center">1/4 xícara de azeite de oliva extra virgem</div>
                        <div class="border-bottom py-2 text-center">Sal e cominho a gosto</div>
                        <div class="border-bottom py-2 text-center">Para os pita chips:</div>
                        <div class="border-bottom py-2 text-center">4 pães pita</div>
                        <div class="border-bottom py-2 text-center">Azeite de oliva</div>
                        <div class="py-2 text-center">Sal e zaatar (opcional)</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">Para o homus:</div>
                        <div class="border-bottom py-2">1. No processador, bata o grão-de-bico até formar uma pasta.</div>
                        <div class="border-bottom py-2">2. Adicione tahine, suco de limão, alho e processe.</div>
                        <div class="border-bottom py-2">3. Com o processador ligado, adicione o azeite em fio.</div>
                        <div class="border-bottom py-2">4. Tempere com sal e cominho.</div>
                        <div class="border-bottom py-2">Para os pita chips:</div>
                        <div class="border-bottom py-2">1. Corte os pães em triângulos.</div>
                        <div class="border-bottom py-2">2. Pincele com azeite e tempere com sal.</div>
                        <div class="border-bottom py-2">3. Asse em forno preaquecido a 180°C por 10 minutos.</div>
                        <div class="py-2">4. Sirva o homus decorado com azeite e os chips ao lado.</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 6 pessoas como entrada.</div>
                </div>
            `,
            "categoria": "Entradas",
            "destaque": false,
            "tempoPreparo": "20 minutos",
            "porcoes": "6 pessoas",
            "dificuldade": "Fácil",
            "imagem_principal": "/assets/img/healthy-homemade-hummus-with-olive-oil-pita-chips-removebg-preview.png",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/humus-caseiro-saudavel-com-azeite-e-pita-chips_2829-13954.jpeg",
                    "descricao": "Homus caseiro servido"
                },
                {
                    "id": 2,
                    "src": "/assets/img/bk-5770-homus-receita.webp",
                    "descricao": "Homus no prato"
                },
                {
                    "id": 3,
                    "src": "/assets/img/bk-6853-blog-ayu3949.webp",
                    "descricao": "Homus de feijão-fradinho"
                },
                {
                    "id": 4,
                    "src": "/assets/img/homus-pasta-arabe-de-grao-de-bico-1.jpeg",
                    "descricao": "Homus de pasta árabe de grão-de-bico"
                }
            ]
        },
        {
            "id": "rec6",
            "titulo": "Tiramisù com Ovomaltine",
            "descricao": "Uma versão brasileira da sobremesa italiana clássica",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">500g de mascarpone</div>
                        <div class="border-bottom py-2 text-center">3 ovos</div>
                        <div class="border-bottom py-2 text-center">100g de açúcar</div>
                        <div class="border-bottom py-2 text-center">24 biscoitos champanhe</div>
                        <div class="border-bottom py-2 text-center">200ml de café forte</div>
                        <div class="border-bottom py-2 text-center">2 colheres de sopa de rum (opcional)</div>
                        <div class="border-bottom py-2 text-center">100g de Ovomaltine crocante</div>
                        <div class="py-2 text-center">Cacau em pó para polvilhar</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">1. Separe as gemas das claras.</div>
                        <div class="border-bottom py-2">2. Bata as gemas com o açúcar até ficar um creme claro.</div>
                        <div class="border-bottom py-2">3. Adicione o mascarpone e misture bem.</div>
                        <div class="border-bottom py-2">4. Bata as claras em neve e incorpore delicadamente ao creme.</div>
                        <div class="border-bottom py-2">5. Misture o café com o rum.</div>
                        <div class="border-bottom py-2">6. Mergulhe rapidamente os biscoitos no café.</div>
                        <div class="border-bottom py-2">7. Monte em camadas: biscoitos, creme, Ovomaltine.</div>
                        <div class="border-bottom py-2">8. Repita as camadas.</div>
                        <div class="border-bottom py-2">9. Finalize com cacau em pó e Ovomaltine.</div>
                        <div class="py-2">10. Leve à geladeira por 4 horas antes de servir.</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 8 pessoas.</div>
                </div>
            `,
            "categoria": "Sobremesas",
            "destaque": true,
            "tempoPreparo": "30 minutos + 4 horas de geladeira",
            "porcoes": "8 pessoas",
            "dificuldade": "Médio",
            "imagem_principal": "/assets/img/tasty-homemade-tiramisu-cake.jpg",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/1853b96b-a724-4e49-8538-26bc4739059d-removebg-preview.png",
                    "descricao": "Tiramisù servido"
                },
                {
                    "id": 2,
                    "src": "/assets/img/deCx5v29SmPsl1IwbO75j2L7K1OaXgZM4mIeCdgV.jpeg",
                    "descricao": "Tiramisù no pote"
                },
                {
                    "id": 3,
                    "src": "/assets/img/252899-shutterstock-1725360061.jpg",
                    "descricao": "Tiramisù no prato"
                },
                {
                    "id": 4,
                    "src": "/assets/img/1-58.jpg",
                    "descricao": "Tiramisù decorado"
                }
            ]
        },
        {
            "id": "rec7",
            "titulo": "Ceviche Clássico Peruano",
            "descricao": "Saboroso, adocicado e refrescante, o ceviche é considerado patrimônio cultural do Peru",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">250g de filé de peixe branco fresco (tilápia, robalo ou linguado)</div>
                        <div class="border-bottom py-2 text-center">Suco de 4 limões grandes</div>
                        <div class="border-bottom py-2 text-center">½ cebola roxa, cortada em meia-lua bem fina</div>
                        <div class="border-bottom py-2 text-center">½ pimenta dedo-de-moça, sem sementes e picada (opcional)</div>
                        <div class="border-bottom py-2 text-center">½ colher de chá de sal</div>
                        <div class="border-bottom py-2 text-center">1 pitada de pimenta-do-reino</div>
                        <div class="border-bottom py-2 text-center">1 colher de sopa de coentro fresco picado</div>
                        <div class="border-bottom py-2 text-center">1/2 batata-doce cozida, cortada em rodelas (opcional, para servir)</div>
                        <div class="py-2 text-center">Grãos de milho cozido ou canjica salgada (opcional, tradicional no Peru)</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">Corte o peixe em cubos médios e coloque em uma tigela de vidro ou cerâmica (evite metal).</div>
                        <div class="border-bottom py-2">Adicione o sal, a pimenta-do-reino e o suco de limão até cobrir todo o peixe.</div>
                        <div class="border-bottom py-2">Misture bem, cubra com plástico-filme e leve à geladeira por 10 minutos. O ácido do limão vai "cozinhar" o peixe.</div>
                        <div class="border-bottom py-2">Retire da geladeira e adicione a cebola roxa, a pimenta dedo-de-moça (se estiver usando) e o coentro.</div>
                        <div class="py-2">Misture novamente, ajuste o sal e sirva imediatamente com batata-doce e milho cozido ao lado, se desejar.</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 2-4 pessoas.</div>
                </div>
            `,
            "categoria": "Pratos Principais",
            "destaque": true,
            "tempoPreparo": "25 minutos",
            "porcoes": "2-4 pessoas",
            "dificuldade": "Fácil",
            "imagem_principal": "/assets/img/cropped-close-up-plate-full-fried-cheese-balls-wooden-table-dark-wall-copyspace-dish-meal-delicious-tasty-nutrition-fat-calories-unhealthy.jpg",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/cropped-close-up-plate-full-fried-cheese-balls-wooden-table-dark-wall-copyspace-dish-meal-delicious-tasty-nutrition-fat-calories-unhealthy.jpg",
                    "descricao": "Ceviche servido"
                },
                {
                    "id": 2,
                    "src": "/assets/img/ceviche_de_camarao_especial_1493735830346.jpg",
                    "descricao": "Ceviche de Camarão Especial"
                },
                {
                    "id": 3,
                    "src": "/assets/img/ceviche.jpg",
                    "descricao": "Ceviche Tradicional"
                },
                {
                    "id": 4,
                    "src": "/assets/img/high-angle-cup-with-delicious-esquites-lime.jpg",
                    "descricao": "Ceviche com Limão"
                }
            ]
        },
        {
            "id": "rec8",
            "titulo": "Bowl asiático",
            "descricao": "Peixe cru, camarão, frango empanado, tomate-cereja, cebola roxa e arroz",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">200g de salmão fresco cortado em cubos</div>
                        <div class="border-bottom py-2 text-center">150g de camarão limpo</div>
                        <div class="border-bottom py-2 text-center">200g de filé de frango para empanar</div>
                        <div class="border-bottom py-2 text-center">2 xícaras de arroz japonês cozido</div>
                        <div class="border-bottom py-2 text-center">1 xícara de tomates-cereja cortados ao meio</div>
                        <div class="border-bottom py-2 text-center">1 cebola roxa fatiada finamente</div>
                        <div class="border-bottom py-2 text-center">Farinha de trigo, ovo e farinha panko para empanar</div>
                        <div class="border-bottom py-2 text-center">Molho shoyu a gosto</div>
                        <div class="py-2 text-center">Gergelim torrado para finalizar</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">Prepare o arroz japonês conforme as instruções da embalagem.</div>
                        <div class="border-bottom py-2">Empane o frango passando por farinha, ovo batido e farinha panko.</div>
                        <div class="border-bottom py-2">Frite o frango empanado até dourar e ficar crocante.</div>
                        <div class="border-bottom py-2">Tempere os camarões com sal e pimenta, e grelhe até ficarem rosados.</div>
                        <div class="border-bottom py-2">Corte o salmão em cubos pequenos e tempere com shoyu.</div>
                        <div class="border-bottom py-2">Monte o bowl:</div>
                        <div class="border-bottom py-2">Coloque o arroz como base</div>
                        <div class="border-bottom py-2">Disponha o salmão, camarão e frango empanado em seções</div>
                        <div class="py-2">Finalize com tomates-cereja, cebola roxa e gergelim</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 2 pessoas.</div>
                </div>
            `,
            "categoria": "Pratos Principais",
            "destaque": false,
            "tempoPreparo": "45 minutos",
            "porcoes": "2 pessoas",
            "dificuldade": "Médio",
            "imagem_principal": "/assets/img/dish.png",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/Poke-bowl-estilo-nordico1.jpg",
                    "descricao": "Bowl estilo nordico com salmão e mirtilo"
                },
                {
                    "id": 2,
                    "src": "/assets/img/7434-SITE-PROJETO-1120-scaled.jpg",
                    "descricao": "Bowl com legumes e frango"
                },
                {
                    "id": 3,
                    "src": "/assets/img/228-q-4825-picadinho-oriental-em-uma-panela-so.webp",
                    "descricao": "Bowl com picadinho oriental"
                },
                {
                    "id": 4,
                    "src": "/assets/img/Bowl_Arroz_Negro_Camarao_Salteado.jpg",
                    "descricao": "Bowl com arroz negro e camarão salteado"
                }
            ]
        },
        {
            "id": "rec9",
            "titulo": "Misto quente",
            "descricao": "Pão de forma, presunto, frango desfiado, queijo, tomate e orégano",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">4 fatias de pão de forma</div>
                        <div class="border-bottom py-2 text-center">4 fatias de presunto</div>
                        <div class="border-bottom py-2 text-center">100g de frango desfiado temperado</div>
                        <div class="border-bottom py-2 text-center">4 fatias de queijo muçarela</div>
                        <div class="border-bottom py-2 text-center">2 tomates fatiados</div>
                        <div class="border-bottom py-2 text-center">Orégano a gosto</div>
                        <div class="py-2 text-center">Manteiga para untar</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">Monte os sanduíches na seguinte ordem:</div>
                        <div class="border-bottom py-2">Pão de forma, presunto, frango desfiado, queijo e tomate</div>
                        <div class="border-bottom py-2">Polvilhe orégano por cima</div>
                        <div class="border-bottom py-2">Feche com a outra fatia de pão</div>
                        <div class="border-bottom py-2">Passe manteiga por fora dos pães</div>
                        <div class="py-2">Grelhe na sanduicheira ou chapa até dourar e o queijo derreter</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 2 pessoas.</div>
                </div>
            `,
            "categoria": "Lanches",
            "destaque": false,
            "tempoPreparo": "15 minutos",
            "porcoes": "2 pessoas",
            "dificuldade": "Fácil",
            "imagem_principal": "/assets/img/dish2.png",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/istock-155388694-1.jpg",
                    "descricao": "Misto quente servido"
                },
                {
                    "id": 2,
                    "src": "/assets/img/istock-1313739997-e1690315827805.jpg",
                    "descricao": "Misto quente com cheddar"
                },
                {
                    "id": 3,
                    "src": "/assets/img/69893dd5-83a3-435b-88f6-7e5bf10d4e1b.jpg",
                    "descricao": "Misto quente com ovo e bacon"
                },
                {
                    "id": 4,
                    "src": "/assets/img/202203141716_LJKS_i.jpeg",
                    "descricao": "Misto quente com pão francês"
                }
            ]
        },
        {
            "id": "rec10",
            "titulo": "Smoothie de kiwi",
            "descricao": "Banana, leite vegetal, decorado com morangos, kiwi e lascas de coco",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">2 kiwis descascados</div>
                        <div class="border-bottom py-2 text-center">1 banana madura</div>
                        <div class="border-bottom py-2 text-center">200ml de leite de amêndoas</div>
                        <div class="border-bottom py-2 text-center">1 colher de sopa de mel</div>
                        <div class="border-bottom py-2 text-center">4 morangos para decorar</div>
                        <div class="border-bottom py-2 text-center">2 colheres de sopa de lascas de coco</div>
                        <div class="py-2 text-center">Gelo a gosto</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">No liquidificador, coloque os kiwis, banana e leite de amêndoas</div>
                        <div class="border-bottom py-2">Adicione o mel e o gelo</div>
                        <div class="border-bottom py-2">Bata até ficar cremoso</div>
                        <div class="border-bottom py-2">Sirva em copos altos</div>
                        <div class="border-bottom py-2">Decore com fatias de morango</div>
                        <div class="py-2">Finalize com as lascas de coco por cima</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 2 pessoas.</div>
                </div>
            `,
            "categoria": "Bebidas",
            "destaque": false,
            "tempoPreparo": "10 minutos",
            "porcoes": "2 pessoas",
            "dificuldade": "Fácil",
            "imagem_principal": "/assets/img/dish3.png",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/smoothie-de-kiwi-com-chia.jpeg",
                    "descricao": "Smoothie de kiwi servido"
                },
                {
                    "id": 2,
                    "src": "/assets/img/smoothie-banana-kiwi.jpg",
                    "descricao": "Smoothie morango com kiwi"
                },
                {
                    "id": 3,
                    "src": "/assets/img/Mango-Kiwi-Smoothie-Evergreen-Kitchen-1.jpg",
                    "descricao": "Smoothie de manga"
                },
                {
                    "id": 4,
                    "src": "/assets/img/blueberry-kiwi-smoothie_web-6.jpg",
                    "descricao": "Smoothie de mirtilo"
                }
            ]
        },
        {
            "id": "rec11",
            "titulo": "Yakisoba",
            "descricao": "Lámem, camarão, cenoura, brócolis, cebola, molho shoyu e óleo de gergelim",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center">400g de macarrão para yakisoba</div>
                        <div class="border-bottom py-2 text-center">200g de camarão limpo</div>
                        <div class="border-bottom py-2 text-center">2 cenouras cortadas em julienne</div>
                        <div class="border-bottom py-2 text-center">2 xícaras de brócolis em floretes</div>
                        <div class="border-bottom py-2 text-center">1 cebola grande fatiada</div>
                        <div class="border-bottom py-2 text-center">4 colheres de sopa de molho shoyu</div>
                        <div class="border-bottom py-2 text-center">2 colheres de chá de óleo de gergelim</div>
                        <div class="py-2 text-center">Sal e pimenta a gosto</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2">Cozinhe o macarrão conforme instruções da embalagem, escorra e reserve</div>
                        <div class="border-bottom py-2">Em uma wok ou panela grande, aqueça o óleo de gergelim</div>
                        <div class="border-bottom py-2">Refogue a cebola até ficar transparente</div>
                        <div class="border-bottom py-2">Adicione os camarões e cozinhe até ficarem rosados</div>
                        <div class="border-bottom py-2">Acrescente as cenouras e brócolis, refogue por 3-4 minutos</div>
                        <div class="border-bottom py-2">Adicione o macarrão cozido</div>
                        <div class="border-bottom py-2">Tempere com shoyu, sal e pimenta</div>
                        <div class="py-2">Misture bem e sirva quente</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 4 pessoas.</div>
                </div>
            `,
            "categoria": "Pratos Principais",
            "destaque": false,
            "tempoPreparo": "30 minutos",
            "porcoes": "4 pessoas",
            "dificuldade": "Médio",
            "imagem_principal": "/assets/img/dish4.png",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/yakisoba-scaled.jpg",
                    "descricao": "Yakisoba servido"
                },
                {
                    "id": 2,
                    "src": "/assets/img/Yakisoba-de-frango-G.jpg",
                    "descricao": "Yakisoba tradicional"
                },
                {
                    "id": 3,
                    "src": "/assets/img/renata-imagem-receitas-yakisoba-share.jpg",
                    "descricao": "Yakisoba com macarrão instantâneo"
                },
                {
                    "id": 4,
                    "src": "/assets/img/ddda0b8f9e045fe1198e.webp",
                    "descricao": "Yakisoba com Camarão"
                }
            ]
        },
        {
            "id": "rec12",
            "titulo": "Nhoque de Batata-Doce",
            "descricao": "Nhoque de batata-doce roxa com molho de gorgonzola e nozes",
            "conteudo": `
                <h2 class="text-center" style="color: #e9a209;">Ingredientes</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2 text-center"><strong>Para o nhoque:</strong></div>
                        <div class="border-bottom py-2 text-center">400g de batata-doce roxa cozida e amassada</div>
                        <div class="border-bottom py-2 text-center">1 gema de ovo</div>
                        <div class="border-bottom py-2 text-center">3/4 xícara de farinha de arroz (ou farinha de trigo, se preferir)</div>
                        <div class="border-bottom py-2 text-center">1 pitada de sal</div>
                        <div class="border-bottom py-2 text-center">1 colher de chá de azeite (opcional, pra dar liga)</div>
                        <div class="border-bottom py-2 text-center"><strong>Para o molho:</strong></div>
                        <div class="border-bottom py-2 text-center">100g de gorgonzola</div>
                        <div class="border-bottom py-2 text-center">1/2 caixinha de creme de leite (ou 100 ml de creme de leite fresco)</div>
                        <div class="border-bottom py-2 text-center">1/4 xícara de leite</div>
                        <div class="border-bottom py-2 text-center">Pimenta-do-reino a gosto</div>
                        <div class="py-2 text-center">1/4 xícara de nozes picadas e tostadas (pra finalizar)</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Modo de Preparo</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="d-flex flex-column">
                        <div class="border-bottom py-2"><strong>Nhoque:</strong></div>
                        <div class="border-bottom py-2">Cozinhe a batata-doce roxa sem casca até ficar macia. Escorra bem e amasse ainda quente.</div>
                        <div class="border-bottom py-2">Espere esfriar um pouco e misture a gema e o sal.</div>
                        <div class="border-bottom py-2">Vá adicionando a farinha aos poucos até virar uma massa homogênea e macia.</div>
                        <div class="border-bottom py-2">Modele rolinhos e corte os nhoques.</div>
                        <div class="border-bottom py-2">Cozinhe em água fervente com sal até que subam à superfície (leva cerca de 2 a 3 minutos).</div>
                        <div class="border-bottom py-2">Retire com uma escumadeira e reserve.</div>
                        <div class="border-bottom py-2"><strong>Molho:</strong></div>
                        <div class="border-bottom py-2">Em uma panela pequena, derreta o gorgonzola com o leite e o creme de leite em fogo baixo.</div>
                        <div class="border-bottom py-2">Misture até ficar cremoso e homogêneo. Ajuste com pimenta-do-reino a gosto.</div>
                        <div class="border-bottom py-2"><strong>Montagem:</strong></div>
                        <div class="py-2">Coloque os nhoques em um prato, regue com o molho quente e finalize com nozes tostadas por cima.</div>
                    </div>
                </div>

                <h2 class="text-center" style="color: #e9a209;">Rendimento</h2>
                <div class="bg-white rounded p-4 mb-4">
                    <div class="text-center">Serve 2 porções bem servidas.</div>
                </div>
            `,
            "categoria": "Pratos Principais",
            "destaque": false,
            "tempoPreparo": "35 minutos",
            "porcoes": "2 pessoas",
            "dificuldade": "Médio",
            "imagem_principal": "/assets/img/186be9f9-cbd1-4d0a-920b-10df43324008-removebg-preview.png",
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/assets/img/renata-imagem-receitas-nhoque-de-batata-share.jpg",
                    "descricao": "Nhoque de Batata-Doce servido"
                },
                {
                    "id": 2,
                    "src": "/assets/img/nhoque-molho-bolonhesa.jpeg",
                    "descricao": "Nhoque molho bolonhesa"
                },
                {
                    "id": 3,
                    "src": "/assets/img/12bc46f1ff632ff3a42d461b74f7aa26.jpeg",
                    "descricao": "Nhoque molho branco"
                },
                {
                    "id": 4,
                    "src": "/assets/img/como-fazer-nhoque-topo.jpg",
                    "descricao": "Nhoque de Camarão"
                }
            ]
        }
    ]
}

// Dados das imagens para a seção Todas as Receitas
const imagensTodasReceitas = {
    "Sopa de Abóbora com Gengibre": "/assets/img/12905643-removebg-preview.png",
    "Lasanha de Berinjela Low-Carb": "/assets/img/10458317-removebg-preview.png",
    "Tacos de Frango": "/assets/img/delicious-chicken-tacos-with-avocado-cilantro_632498-24820-removebg-preview.png",
    "Pizza de Pepperoni Clássica": "/assets/img/057f1b6c-ec55-47d9-8275-cabf3479c3fe-removebg-preview.png",
    "Homus Caseiro com Azeite e Pita Chips": "/assets/img/healthy-homemade-hummus-with-olive-oil-pita-chips-removebg-preview.png",
    "Tiramisù com Ovomaltine": "/assets/img/1853b96b-a724-4e49-8538-26bc4739059d-removebg-preview.png",
    "Ceviche Clássico Peruano": "/assets/img/ceviche-png-with-transparent-background_484256-921-removebg-preview.png",
    "Bowl asiático": "/assets/img/dish.png",
    "Misto quente": "/assets/img/dish2.png",
    "Smoothie de kiwi": "/assets/img/dish3.png",
    "Yakisoba": "/assets/img/dish4.png",
    "Nhoque de Batata-Doce": "/assets/img/186be9f9-cbd1-4d0a-920b-10df43324008-removebg-preview.png"
};

function carregarDestaques() {
    const carouselInner = document.querySelector('#carouselDestaques .carousel-inner');
    if (!carouselInner) return;
    document.getElementById('carouselDestaques').classList.remove('carousel-fade');
    carouselInner.innerHTML = '';
    const receitasDestaque = dados.receitas.filter(receita => receita.destaque);
    if (receitasDestaque.length === 0) return;

    receitasDestaque.forEach((receita, index) => {
        const divCarousel = document.createElement('div');
        divCarousel.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        divCarousel.style.transition = 'transform 1.2s ease-in-out';
        
        const img = new Image();
        img.src = receita.imagem_principal;
        img.className = 'd-block w-100';
        img.alt = receita.titulo;
        img.style.height = '400px';
        img.style.objectFit = 'cover';
        img.style.transform = 'scale(1.02)';
        img.style.transition = 'transform 1.2s ease-in-out';

        const link = document.createElement('a');
        link.href = `detalhes.html?id=${receita.id}`;
        link.className = 'text-decoration-none';
        
        const caption = document.createElement('div');
        caption.className = 'carousel-caption d-none d-md-block';
        caption.style.transition = 'opacity 1.2s ease-in-out';
        caption.innerHTML = `
            <h5 class="slide-in-right">${receita.titulo}</h5>
            <p class="slide-in-left">${receita.descricao}</p>
        `;

        link.appendChild(img);
        link.appendChild(caption);
        divCarousel.appendChild(link);
        carouselInner.appendChild(divCarousel);
    });

    // Estilos
    const style = document.createElement('style');
    style.textContent = `
        .slide-in-right {
            animation: slideInRight 1.2s ease-in-out;
        }
        .slide-in-left {
            animation: slideInLeft 1.2s ease-in-out;
        }
        @keyframes slideInRight {
            from {
                transform: translateX(100px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideInLeft {
            from {
                transform: translateX(-100px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .carousel-item.active img {
            transform: scale(1);
        }
    `;
    document.head.appendChild(style);

    const carousel = new bootstrap.Carousel(document.getElementById('carouselDestaques'), {
        interval: 5000, 
        wrap: true, 
        keyboard: true, 
        ride: 'carousel',
        pause: 'hover', 
        touch: true 
    });
}

function carregarTodasReceitas() {
    const container = document.getElementById('todos-itens-container');
    if (!container) return;

    container.innerHTML = '';

    dados.receitas.forEach(receita => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-lg-3';
        col.innerHTML = `
            <div class="card dish h-100 position-relative">
                <div class="dish-heart">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div class="text-center">
                    <img src="${imagensTodasReceitas[receita.titulo]}" class="dish-image mx-auto" alt="${receita.titulo}" style="object-fit: contain; height: 200px;">
                </div>
                <div class="card-body">
                    <h3 class="dish-title">${receita.titulo}</h3>
                    <p class="dish-description">${receita.descricao || 'Tempo de preparo: ' + receita.tempoPreparo}</p>
                    <div class="dish-rate" style="display: flex; align-items: center;">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>(500+)</span>
                        <span class="favorito-wrapper" data-receita-id="${receita.id}" style="margin-left: 10px; z-index: 2; position: relative;">
                            <img src="/assets/img/desfavoritado.png" class="favorito-icon" alt="Favoritar">
                        </span>
                    </div>
                </div>
                <a href="detalhes.html?id=${receita.id}" class="stretched-link"></a>
            </div>
        `;
        container.appendChild(col);
    });

    // Após carregar todas as receitas e adicioná-las ao DOM, configure os favoritos.
    // As funções atualizarIconesFavoritos e configurarFavoritosAutenticados estão em auth.js
    // Verificamos se elas existem antes de chamá-las.
    if (typeof atualizarIconesFavoritos === 'function' && typeof configurarFavoritosAutenticados === 'function') {
        atualizarIconesFavoritos();
        configurarFavoritosAutenticados();
    }
}

function exibirCards() {
    const container = document.querySelector('#menu-dinamico > div > div');
    if (!container) return;
    container.innerHTML = '';
    fetch('http://localhost:3000/receitasVegetarianas')
        .then(response => response.json())
        .then(receitas => {
            receitas.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col-sm-6 col-lg-3 card-separado';
                col.innerHTML = `
                    <div class="card dish h-100">
                        <img src="${item.imagem}" class="dish-image" alt="${item.titulo}">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h3 class="dish-title">${item.titulo}</h3>
                                <p class="dish-description">${item.descricao}</p>
                            </div>
                            <button class="btn mt-2" style="background-color: #e9a209; color: white;" onclick="window.location.href='detalhes.html?id=${item.id}'">Receita</button>
                        </div>
                    </div>
                `;
                container.appendChild(col);
            });
        })
        .catch(error => {
            container.innerHTML = '<p>Erro ao carregar receitas vegetarianas.</p>';
            console.error('Erro ao buscar receitas vegetarianas:', error);
        });

    atualizarNavbar();
}

function carregarDetalhesItem() {
    const detalhesContainer = document.getElementById('item-detalhes');
    const galeriaContainer = document.getElementById('galeria-fotos');
    if (!detalhesContainer) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id && id.startsWith('old')) {
        fetch(`http://localhost:3000/receitasVegetarianas/${id}`)
            .then(response => response.json())
            .then(receita => {
                if (!receita) return;
                detalhesContainer.innerHTML = `
                    <div class="col-md-8 mx-auto text-center">
                        <h1 class="mb-4" style="font-size: 2.5rem; color: #333;">${receita.titulo}</h1>
                        <img src="${receita.imagem_principal || receita.imagem}" alt="${receita.titulo}" class="img-fluid rounded mb-5" style="max-width: 600px;">
                        <div class="recipe-info mb-5">
                            <div class="row g-4 justify-content-center">
                                <div class="col-sm-4">
                                    <div class="card h-100">
                                        <div class="card-body text-center">
                                            <i class="fas fa-clock mb-2" style="color: #e9a209; font-size: 24px;"></i>
                                            <h5>Tempo de Preparo</h5>
                                            <p class="mb-0">${receita.tempoPreparo}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card h-100">
                                        <div class="card-body text-center">
                                            <i class="fas fa-users mb-2" style="color: #e9a209; font-size: 24px;"></i>
                                            <h5>Porções</h5>
                                            <p class="mb-0">${receita.porcoes}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card h-100">
                                        <div class="card-body text-center">
                                            <i class="fas fa-chart-line mb-2" style="color: #e9a209; font-size: 24px;"></i>
                                            <h5>Dificuldade</h5>
                                            <p class="mb-0">${receita.dificuldade}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 style="color: #333; font-size: 2rem;" class="mb-4">Sobre a Receita</h2>
                        <div class="mb-5">
                            ${receita.conteudo}
                        </div>
                    </div>
                `;
                if (galeriaContainer && receita.imagens_complementares) {
                    galeriaContainer.innerHTML = `
                        <h3 style="color: #e9a209;" class="mb-4">Galeria de Fotos</h3>
                        <div class="row g-4">
                            ${receita.imagens_complementares.map(imagem => `
                                <div class="col-sm-6 col-lg-3">
                                    <div class="card h-100">
                                        <img src="${imagem.src}" class="card-img-top" alt="${imagem.descricao}" style="height: 200px; object-fit: cover;">
                                        <div class="card-body">
                                            <p class="card-text">${imagem.descricao}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;
                } else if (galeriaContainer) {
                    galeriaContainer.innerHTML = '';
                }
            })
            .catch(error => {
                detalhesContainer.innerHTML = '<p>Erro ao carregar detalhes da receita.</p>';
                console.error('Erro ao buscar detalhes da receita vegetariana:', error);
            });
    } else {
        let receita = dados.receitas.find(r => r.id == id);
        if (receita) {
            detalhesContainer.innerHTML = `
                <div class="col-md-8 mx-auto text-center">
                    <h1 class="mb-4" style="font-size: 2.5rem; color: #333;">${receita.titulo}</h1>
                    <img src="${receita.imagem_principal}" alt="${receita.titulo}" class="img-fluid rounded mb-5" style="max-width: 600px;">
                    <div class="recipe-info mb-5">
                        <div class="row g-4 justify-content-center">
                            <div class="col-sm-4">
                                <div class="card h-100">
                                    <div class="card-body text-center">
                                        <i class="fas fa-clock mb-2" style="color: #e9a209; font-size: 24px;"></i>
                                        <h5>Tempo de Preparo</h5>
                                        <p class="mb-0">${receita.tempoPreparo}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card h-100">
                                    <div class="card-body text-center">
                                        <i class="fas fa-users mb-2" style="color: #e9a209; font-size: 24px;"></i>
                                        <h5>Porções</h5>
                                        <p class="mb-0">${receita.porcoes}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card h-100">
                                    <div class="card-body text-center">
                                        <i class="fas fa-chart-line mb-2" style="color: #e9a209; font-size: 24px;"></i>
                                        <h5>Dificuldade</h5>
                                        <p class="mb-0">${receita.dificuldade}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 style="color: #333; font-size: 2rem;" class="mb-4">Sobre a Receita</h2>
                    <div class="mb-5">
                        ${receita.conteudo}
                    </div>
                </div>
            `;
            if (galeriaContainer && receita.imagens_complementares) {
                galeriaContainer.innerHTML = `
                    <h3 style="color: #e9a209;" class="mb-4">Galeria de Fotos</h3>
                    <div class="row g-4">
                        ${receita.imagens_complementares.map(imagem => `
                            <div class="col-sm-6 col-lg-3">
                                <div class="card h-100">
                                    <img src="${imagem.src}" class="card-img-top" alt="${imagem.descricao}" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <p class="card-text">${imagem.descricao}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else if (galeriaContainer) {
                galeriaContainer.innerHTML = '';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('#titulo');
    const imagem = document.querySelector('#imagem');
    const conteudo = document.querySelector('#conteudo');

    if (titulo && imagem && conteudo) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if (!id) return;

        fetch(`http://localhost:3000/receitas/${id}`)
            .then(response => response.json())
            .then(receita => {
                if (!receita) return;
                titulo.textContent = receita.titulo;
                imagem.src = receita.imagem || receita.imagem_principal;
                conteudo.textContent = receita.conteudo;
            })
            .catch(error => console.error("Erro ao carregar receita:", error));
    }
});

if (document.querySelector('#titulo') && document.querySelector('#imagem') && document.querySelector('#conteudo')) {
    document.addEventListener('DOMContentLoaded', carregarDetalhesViaFetch);
}

const API_URL = 'http://localhost:3000/receitas';
const lista = document.getElementById('lista-receitas');
const form = document.getElementById('form-receita');
const idInput = document.getElementById('id');
const nomeInput = document.getElementById('nome');
const ingredientesInput = document.getElementById('ingredientes');
const modoInput = document.getElementById('modoDePreparo');
const categoriaInput = document.getElementById('categoria');
const tempoInput = document.getElementById('tempoPreparo');
const imagemInput = document.getElementById('imagem');
function mostrarMensagem(mensagem, tipo = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${tipo} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${mensagem}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    const container = document.querySelector('.container');
    if (container) {
        container.insertAdjacentElement('afterbegin', alertDiv);
    }
    setTimeout(() => alertDiv.remove(), 3000);
}

async function carregarReceitas() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        const lista = document.getElementById('lista-receitas');
        if (!lista) return;
        
        lista.innerHTML = '';
        data.forEach(receita => {
            const li = document.createElement('li');
            li.className = 'list-group-item mb-5';
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-start">
                    <div class="text-start" style="flex:1;">
                        <h5 class="mb-1">${receita.nome || receita.titulo || 'Sem nome'}</h5>
                        <p class="mb-1"><strong>Categoria:</strong> ${receita.categoria || 'Não definida'}</p>
                        <p class="mb-1"><strong>Tempo de Preparo:</strong> ${(receita.tempoPreparo || receita.tempo_preparo || 'Não definido')} minutos</p>
                        <p class="mb-1"><strong>Ingredientes:</strong> ${receita.ingredientes || receita.descricao || 'Não informado'}</p>
                        <p class="mb-1"><strong>Modo de Preparo:</strong> ${receita.modoDePreparo || (receita.conteudo ? '' : 'Não informado')}</p>
                    </div>
                    <button class="btn btn-danger btn-sm ms-2" style="height: 36px;" onclick="deletarReceita('${receita.id}')">
                        <i class="fas fa-trash"></i> Excluir
                    </button>
                </div>
                ${receita.conteudo && !receita.modoDePreparo ? `<div class='mt-3 text-center'>${receita.conteudo}</div>` : ''}
            `;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao carregar receitas:', error);
        mostrarMensagem('Erro ao carregar receitas. Por favor, tente novamente.', 'danger');
    }
}

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const receita = {
            nome: nomeInput.value,
            ingredientes: ingredientesInput.value,
            modoDePreparo: modoInput.value,
            categoria: categoriaInput.value,
            tempoPreparo: parseInt(tempoInput.value) || 0,
            imagem: imagemInput.value,
            avaliacao: 0,
            numAvaliacoes: 0
        };

        try {
            const id = idInput.value;
            const url = id ? `${API_URL}/${id}` : API_URL;
            const method = id ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(receita)
            });

            if (!response.ok) throw new Error('Erro na operação');

            form.reset();
            idInput.value = '';
            mostrarMensagem(`Receita ${id ? 'atualizada' : 'cadastrada'} com sucesso!`);
            carregarReceitas();
        } catch (error) {
            console.error('Erro ao salvar receita:', error);
            mostrarMensagem('Erro ao salvar receita. Por favor, tente novamente.', 'danger');
        }
    });
}

function editarReceita(id, nome, ingredientes, modo, categoria, tempo, imagem) {
    const form = document.getElementById('form-receita');
    if (!form) return;
    
    const idInput = document.getElementById('id');
    const nomeInput = document.getElementById('nome');
    const ingredientesInput = document.getElementById('ingredientes');
    const modoInput = document.getElementById('modoDePreparo');
    const categoriaInput = document.getElementById('categoria');
    const tempoInput = document.getElementById('tempoPreparo');
    const imagemInput = document.getElementById('imagem');

    idInput.value = id;
    nomeInput.value = nome;
    ingredientesInput.value = ingredientes;
    modoInput.value = modo;
    categoriaInput.value = categoria;
    tempoInput.value = tempo;
    imagemInput.value = imagem;

    form.scrollIntoView({ behavior: 'smooth' });
}

async function deletarReceita(id) {
    if (!confirm('Tem certeza que deseja excluir esta receita?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Erro ao excluir receita');

        mostrarMensagem('Receita excluída com sucesso!');
        carregarReceitas();
    } catch (error) {
        console.error('Erro ao excluir receita:', error);
        mostrarMensagem('Erro ao excluir receita. Por favor, tente novamente.', 'danger');
    }
}

function filtrarReceitas(termo) {
    const cards = document.querySelectorAll('#todos-itens-container .col-sm-6');
    const termoBusca = termo.toLowerCase();
    const searchResults = document.getElementById('search-results');

    searchResults.innerHTML = '';
    
    if (termoBusca.length === 0) {
        searchResults.style.display = 'none';
        return;
    }
    
    let resultadosEncontrados = false;
    
    cards.forEach(card => {
        const titulo = card.querySelector('.dish-title').textContent.toLowerCase();
        const descricao = card.querySelector('.dish-description').textContent.toLowerCase();
        const imagem = card.querySelector('.dish-image').src;
        const link = card.querySelector('.stretched-link').href;
        
        if (titulo.includes(termoBusca) || descricao.includes(termoBusca)) {
            card.style.display = '';
            resultadosEncontrados = true;
            
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <img src="${imagem}" alt="${titulo}">
                <div class="result-info">
                    <h4 class="result-title">${card.querySelector('.dish-title').textContent}</h4>
                    <p class="result-description">${card.querySelector('.dish-description').textContent}</p>
                </div>
            `;
            
            resultItem.addEventListener('click', () => {
                window.location.href = link;
            });
            
            searchResults.appendChild(resultItem);
        } else {
            card.style.display = 'none';
        }
    });

    searchResults.style.display = resultadosEncontrados ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // Lógica para index.html
    const carouselDestaques = document.getElementById('carouselDestaques');
    const todosItensContainer = document.getElementById('todos-itens-container');
    const menuDinamico = document.getElementById('menu-dinamico');

    if (carouselDestaques) {
        carregarDestaques();
    }
    if (todosItensContainer) {
        carregarTodasReceitas();
    }
    if (menuDinamico) {
        exibirCards();
    }

    // Funcionalidade de busca (na navbar, presente em index.html)
    const inputPesquisa = document.querySelector('.search__input');
    const btnLimpar = document.querySelector('.search__button');
    const searchResults = document.getElementById('search-results');

    if (inputPesquisa && btnLimpar && searchResults) {
        inputPesquisa.addEventListener('input', (e) => {
            filtrarReceitas(e.target.value);
        });
        btnLimpar.addEventListener('click', () => {
            inputPesquisa.value = '';
            filtrarReceitas('');
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search')) {
                searchResults.style.display = 'none';
            }
        });
    }

    // Lógica para detalhes.html
    if (document.getElementById('item-detalhes')) {
        carregarDetalhesItem();
    }

    // Lógica para cadastro.html
    const formReceita = document.getElementById('form-receita');
    const listaReceitas = document.getElementById('lista-receitas');

    if (formReceita && listaReceitas) {
        const idInput = document.getElementById('id');
        const nomeInput = document.getElementById('nome');
        const ingredientesInput = document.getElementById('ingredientes');
        const modoInput = document.getElementById('modoDePreparo');
        const categoriaInput = document.getElementById('categoria');
        const tempoInput = document.getElementById('tempoPreparo');
        const imagemInput = document.getElementById('imagem');

        formReceita.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const receita = {
                nome: nomeInput.value,
                ingredientes: ingredientesInput.value,
                modoDePreparo: modoInput.value,
                categoria: categoriaInput.value,
                tempoPreparo: parseInt(tempoInput.value) || 0,
                imagem: imagemInput.value,
                avaliacao: 0,
                numAvaliacoes: 0
            };

            try {
                const id = idInput.value;
                const url = id ? `${API_URL}/${id}` : API_URL;
                const method = id ? 'PUT' : 'POST';

                const response = await fetch(url, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(receita)
                });

                if (!response.ok) throw new Error('Erro na operação');

                formReceita.reset();
                idInput.value = '';
                mostrarMensagem(`Receita ${id ? 'atualizada' : 'cadastrada'} com sucesso!`);
                carregarReceitas();
            } catch (error) {
                console.error('Erro ao salvar receita:', error);
                mostrarMensagem('Erro ao salvar receita. Por favor, tente novamente.', 'danger');
            }
        });
        carregarReceitas();
    }
});
