const express = require('express');
const app = express();

// Dados fictícios das flores
const Flora = [
  {id: 1, imagem: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/07/01/1451421885-15-tipos-de-lavanda-para-perfumar-seu-jardim-gardeningetc-kernock-park-plants.jpg', nome:'Lavanda', origem:'A lavanda é nativa das regiões montanhosas da Europa ao redor do Mediterrâneo, incluindo países como França, Espanha, Itália e Croácia. É conhecida por suas flores roxas e aroma relaxante', categoria: 'Planta'},

  {id: 2, imagem: 'https://img.freepik.com/fotos-premium/rosas-de-jardim-roseira-flores-cor-de-rosa-no-jardim_156843-552.jpg', nome:'Rosa ', origem:'As rosas têm uma origem diversificada, mas a maioria das espécies é nativa da Ásia. Algumas espécies também são encontradas na Europa, América do Norte e África. São amplamente cultivadas por suas flores belas e perfumadas', categoria: 'Planta'},

  {id: 3, imagem: 'https://casa.abril.com.br/wp-content/uploads/2021/09/Como-plantar-e-cuidar-de-horte%CC%82nsias-10.jpg?crop=1&resize=1212,909', nome:'Hortênsia', origem:'As hortênsias são nativas do sul e leste da Ásia, particularmente Japão, China e Himalaia. Elas são populares por suas grandes inflorescências que podem ser de várias cores, incluindo azul, rosa, branco e roxo', categoria: 'Planta'},

  {id: 4, imagem: 'https://imagens-revista.vivadecora.com.br/uploads/2019/11/crisantemo.jpg', nome:'Crisântemo', origem:'Originário da China, o crisântemo tem sido cultivado há mais de 2.500 anos. Também é popular no Japão, onde simboliza o sol e é uma flor nacional. As flores vêm em uma variedade de cores e formas', categoria: 'Planta'},

  {id: 5, imagem: 'https://blog.cobasi.com.br/wp-content/uploads/2023/02/jasmim-capa.png', nome:'Jasmim', origem:'O jasmim é nativo das regiões tropicais e subtropicais da Eurásia, Australásia e Oceania. É altamente valorizado pelo seu perfume doce e é usado em perfumes e chás', categoria: 'Planta'},

  {id: 6, imagem: 'https://i0.wp.com/revistajardins.pt/wp-content/uploads/2019/03/ThinkstockPhotos-126994221.jpg?fit=1080%2C719&ssl=1', nome:'Hibisco', origem:'O hibisco é originário de regiões tropicais e subtropicais ao redor do mundo, especialmente do sudeste da Ásia e das ilhas do Pacífico. As flores são grandes, vistosas e vêm em várias cores brilhantes', categoria: 'Planta'},

  {id: 7, imagem: 'https://s2.glbimg.com/nijmMyiGE-SdhZpLlNMOYI1Z6Ts=/620x413/smart/e.glbimg.com/og/ed/f/original/2021/12/12/saiba-como-cultivar-margaridas-no-seu-vaso-ou-jardim_3.jpg', nome:'Margarida', origem:'A margarida é nativa da Europa e é amplamente distribuída em todo o continente. É conhecida por suas flores brancas com centros amarelos e simboliza pureza e inocência', categoria: 'Planta'},

  {id: 8, imagem: 'https://s2-casaejardim.glbimg.com/GPsKoVm05e08EjvK74gyn6j6d4E=/0x0:1400x933/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/T/0/ttTFJTRMW375dww7RH1Q/petunia-flor-como-cultivar-sol-cuidar-plantar-dicas-casa-e-jardim-paisagismo.jpg', nome:'Petúnia', origem:'As petúnias são nativas da América do Sul, especialmente do Brasil e Argentina. Elas são populares em jardins devido à sua ampla gama de cores vibrantes e à facilidade de cultivo', categoria: 'Planta'},

  {id: 9, imagem: 'https://s2.glbimg.com/STk3HRkXzTOUdTITwAssKl8mbaU=/620x455/e.glbimg.com/og/ed/f/original/2020/07/24/800px-begonia_semperflorens_dark_pink_01.jpg', nome:'Begônia', origem:'As begônias são originárias das regiões tropicais e subtropicais da América do Sul, África e Ásia. Elas são conhecidas por suas flores coloridas e folhas ornamentais', categoria: 'Planta'},

  {id: 10, imagem: 'https://www.sitiodamata.com.br/media/catalog/product/cache/80281f1a4d89199560fc0837e49d13da/s/e/semente-alecrim-rosmarinho-rosmarinus-officinalis_2nd.jpg', nome:'Alecrim', origem:'O alecrim é nativo da região do Mediterrâneo, incluindo países como Espanha, Portugal, Marrocos e Tunísia. É uma erva perene amplamente usada na culinária, além de ter propriedades medicinais e um aroma agradável', categoria: 'Planta'},

  {id: 11, imagem: 'https://pergunteaoagronomo.com.br/wp-content/uploads/2023/05/Gardening-Know-How.webp', nome:'Tomate', origem:'O tomate é nativo da América do Sul, mais precisamente da região que hoje corresponde ao Peru e ao Equador. Foi domesticado e cultivado pelos povos indígenas antes de ser levado para a Europa pelos exploradores espanhóis no século XVI', categoria:'Semente'},

      {id: 12, imagem: 'https://starfoods.vn/wp-content/uploads/2018/05/bi-ngo-la-loai-cay-quen-thuoc-trong-doi-song-hang-ngay.jpg', nome:'Abóbora', origem:'A abóbora é originária das Américas, especialmente da América Central e do Norte. Era cultivada pelos povos indígenas muito antes da chegada dos europeus e fazia parte da dieta básica junto com o milho e o feijão', categoria:'Semente'},

      {id: 13, imagem: 'https://pergunteaoagronomo.com.br/wp-content/uploads/2023/08/melancia-capa-otimizado.webp', nome:'Melancia', origem:'A melancia é originária da África, onde crescia selvagem. Foi domesticada pelos antigos egípcios há mais de 4.000 anos e, a partir daí, se espalhou pelo Mediterrâneo e pelo resto do mundo', categoria:'Semente'},

      {id: 14, imagem: 'https://fazfacil.com.br/wp-content/uploads/2021/08/20210809-pcdst.jpg', nome:'Cenoura', origem:'A cenoura é originária da região da Pérsia (atual Irã e Afeganistão). Inicialmente cultivada por suas folhas e semente aromáticas, a raiz como a conhecemos hoje foi desenvolvida na Europa por volta do século X', categoria:'Semente'},

      {id: 15, imagem: 'https://blog.aegro.com.br/wp-content/uploads/2019/03/plantacao-de-milho.jpg', nome:'Milho', origem:'O milho é nativo das Américas, especialmente do México. Era uma cultura fundamental para os povos indígenas da América do Norte, Central e do Sul muito antes da chegada dos europeus', categoria:'Semente'},

      {id: 16, imagem: 'https://static.vecteezy.com/ti/fotos-gratis/p2/11571140-feijao-de-jardim-phaseolus-vulgaris-na-terra-velha-ao-lado-de-hamburgo-foto.jpg', nome:'Feijão', origem:'O feijão é originário da América Central e do Sul, onde foi cultivado por milhares de anos pelos povos indígenas. É uma das plantas mais antigas a serem domesticadas na América', categoria:'Semente'},

      {id: 17, imagem: 'https://imagens-revista.vivadecora.com.br/uploads/2018/09/Girassol-em-jardins.jpg', nome:'Girassol', origem:'O girassol é originário da América do Norte, onde foi cultivado pelos nativos americanos há mais de 4.000 anos. Eles usavam a planta para alimentos, óleo e como elemento decorativo', categoria:'Semente'},

      {id: 18, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRHVUs_sMI3lf7Mz8UxZEUCO4ofhB1NniNZjIuNAkAg&s', nome:'Abacate', origem:'O abacate é nativo da América Central e do México. Foi cultivado e utilizado pelos povos mesoamericanos por milhares de anos antes da chegada dos europeus', categoria:'Semente'},

      {id: 19, imagem: 'https://img.myloview.com.br/quadros/maca-vermelha-em-um-ramo-de-arvore-no-jardim-fim-acima-macas-maduras-pendurado-no-galho-no-pomar-colheita-fresca-700-136099781.jpg', nome:'Maçã', origem:'As maçãs são originárias da região do Cazaquistão, na Ásia Central. Acredita-se que a espécie selvagem Malus sieversii seja o ancestral da maçã doméstica', categoria:'Semente'},

      {id: 20, imagem: 'https://www.queridasplantas.com/wp-content/uploads/2016/11/Como-plantar-alface.jpg', nome:'Alface', origem:'A alface é originária da região leste do Mediterrâneo e do Oriente Médio. Era cultivada pelos antigos egípcios, gregos e romanos, sendo uma das primeiras plantas a serem cultivadas pelo homem', categoria:'Semente'},

      {id: 21, imagem: 'https://pergunteaoagronomo.com.br/wp-content/uploads/2023/09/The-Plant-Collector-683x1024.webp', nome:'Árvore de Bordo', origem:'As árvores de bordo são nativas das regiões temperadas do Hemisfério Norte, especialmente da América do Norte. São conhecidas por suas folhas que mudam de cor no outono', categoria: 'Arvore'},

      {id: 22, imagem: 'https://d7cb654846.cbaul-cdnwnd.com/d3e965bb4a19ca659f3ac83e3bc3bf51/system_preview_detail_200000015-9da889ea3b/magn%C3%B3lia.jpg', nome:'Árvore de Magnólia', origem:'As magnólias são nativas da América do Norte, América Central e Ásia. Elas são apreciadas por suas grandes e perfumadas flores que aparecem na primavera', categoria: 'Arvore'},

      {id: 23, imagem: 'https://ae01.alicdn.com/kf/S8bd18f3d3afc4465965acb66c26182a7x.jpg_640x640Q90.jpg_.webp', nome:'Árvore de Cerejeira', origem:'As cerejeiras são originárias das regiões temperadas do Hemisfério Norte, especialmente da Ásia e Europa. São famosas pelas flores de cerejeira, especialmente no Japão', categoria: 'Arvore'},

      {id: 24, imagem: 'https://i.pinimg.com/564x/07/1d/d4/071dd4c35893592985a483907f77c7b1.jpg', nome:'Árvore de Jacarandá', origem:'O jacarandá é nativo da América do Sul, especialmente do Brasil e Argentina. É conhecido por suas flores roxas vibrantes que aparecem na primavera', categoria: 'Arvore'},

      {id: 25, imagem: 'https://hmjardins.com.br/tok/wp-content/uploads/2018/07/1.jpg', nome:'Árvore de Oliveira', origem:'A oliveira é nativa da região do Mediterrâneo, incluindo países como Grécia, Itália e Espanha. É cultivada há milhares de anos por seus frutos e azeite', categoria: 'Arvore'},

      {id: 26, imagem: 'https://http2.mlstatic.com/D_NQ_NP_625819-MLA73415631317_122023-O.webp', nome:'Árvore de Hibisco', origem:'O hibisco é nativo de regiões tropicais e subtropicais ao redor do mundo, especialmente do sudeste da Ásia. É valorizado por suas grandes e vistosas flores', categoria: 'Arvore'},

      {id: 27, imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHtqAudD7BqaCxqM6KE-IX8r-cnIyLB6QD4ft0r_m6_ZAaE0JrjT7yUL1zNQFvmHY2G9k02xoT8JvKZupRMb0omcY_2-CNhbQ-GEUpgMNopnzs8YbjTckiQD_YX9ifyBMGVHBfVGtzg7o/s280/palmatum4.jpg', nome:'Árvore de Ácer Japonês', origem:'O ácer japonês é nativo do Japão, Coreia e China. É muito popular em jardins por suas folhas delicadas e cores brilhantes no outono', categoria: 'Arvore'},

      {id: 28, imagem: 'https://imagens.reformaagraria.pt/loja-agricola/produtos/grandes/4792-6680-1659729276.jpg', nome:'Árvore de Laranjeira', origem:'A laranjeira é nativa do sudeste asiático, incluindo a Índia e o Vietnã. Foi levada para a Europa pelos árabes e é amplamente cultivada por seus frutos doces', categoria: 'Arvore'},

      {id: 29, imagem: 'https://furnitstore.com.br/storage/customers/538a5a3a8e723.jpg', nome:'Árvore de Camélia', origem:'As camélias são nativas do leste da Ásia, particularmente da China e Japão. São valorizadas por suas flores vistosas que aparecem no inverno e na primavera', categoria: 'Arvore'},

      {id: 30, imagem: 'https://i.pinimg.com/236x/49/32/81/493281629e7dc377104cc56f5d9b75f5.jpg', nome:'Árvore de Acerola', origem:'A acerola é nativa das regiões tropicais das Américas, especialmente das Antilhas e da América Central. É conhecida por seus frutos vermelhos ricos em vitamina C', categoria: 'Arvore'}
];

// Rota para a rota raiz '/'
app.get('/', (req, res) => {
  res.json(Flora); // Retorna os dados das flores como JSON
});

// Inicia o servidor na porta especificada ou na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
