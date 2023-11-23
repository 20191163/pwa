// App.js

import React, { useState } from 'react';
import '../cards/cards.css'; 

const App = () => {
  const [selectedRefresco, setSelectedRefresco] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const refrescos = [
    {
      id: 1,
      image: 'https://acdn.mitiendanube.com/stores/001/504/560/products/e49b8abb-689c-4286-a642-0289b4b5403c1-0b40c5a9133a6f59fc16168963215294-640-0.jpeg',
      name: 'Coca-cola',
      type: 'Refresco familiar',
      description: 'Refresco cocacola perfecto para la familia y amigos',
    },
    {
        id: 2,
        image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750105537993L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        name: 'Fresca',
        type: 'Combinaciones',
        description: 'Perfecto para acompa;ar con tus preparados favoritos',
      },
      {
        id: 3,
        image: 'https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw1135bd24/images/product/7501031302741_A.jpg?sw=1000&sh=1000&sm=fit',
        name: 'Pepsi',
        type: 'Refresco cola',
        description: 'El sabor inconfundible de Pepsi para disfrutar en cualquier momento.',
      },
      {
        id: 4,
        image: 'https://panoli.mx/cdn/shop/products/12959_2_1000x.jpg?v=1617824909',
        name: 'Sprite',
        type: 'Refresco lima-limón',
        description: 'Burbujeante y refrescante, perfecto para calmar la sed en días calurosos.',
      },
      {
        id: 5,
        image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750105530387L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        name: 'Fanta',
        type: 'Refresco de naranja',
        description: 'Disfruta del sabor cítrico y divertido de Fanta, ¡una explosión de sabor!',
      },
      {
        id: 6,
        image: 'https://chedrauimx.vtexassets.com/arquivos/ids/21871425/1208500_00.jpg?v=638350061990500000',
        name: 'Mountain Dew',
        type: 'Refresco energético',
        description: 'Una opción con un toque de energía para mantenerte activo durante el día.',
      },
      {
        id: 7,
        image: 'https://hebmx.vtexassets.com/arquivos/ids/778429/agua-ginger-ale-1-lt_x3.jpg?v=638218887175200000',
        name: 'Schweppes',
        type: 'Tónica',
        description: 'Refresco perfecto para combinar con tu bebida espirituosa favorita.',
      },
      {
        id: 8,
        image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750103134508L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        name: 'Mirinda',
        type: 'Refresco de frutas',
        description: 'Sabores intensos y vibrantes para deleitar tu paladar.',
      },
      {
        id: 9,
        image: 'https://panoli.mx/cdn/shop/products/RE0150_1417x.png?v=1597158191',
        name: 'Dr. Pepper',
        type: 'Refresco de cereza y vainilla',
        description: 'Una mezcla única de sabores que te sorprenderá.',
      },
      {
        id: 10,
        image: 'https://chedrauimx.vtexassets.com/arquivos/ids/21892871-800-auto?v=638350290502870000&width=800&height=auto&aspect=true',
        name: 'A&W Root Beer',
        type: 'Refresco de raíz',
        description: 'Sabor clásico de refresco de raíz para momentos de nostalgia.',
      },
      {
        id: 11,
        image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750102201406L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        name: '7UP',
        type: 'Refresco de limón-lima',
        description: 'Siete burbujas refrescantes para satisfacer tu sed.',
      },
      {
        id: 12,
        image: 'https://cdn.shopify.com/s/files/1/0566/4391/1854/files/7501198355673_1_15082023.jpg?v=1692229938',
        name: 'Crush',
        type: 'Refresco de naranja',
        description: 'Sabor intenso y afrutado de naranja para los amantes de los cítricos.',
      },
      
      {
        id: 14,
        image: 'https://lacolonia.vtexassets.com/arquivos/ids/159979-800-800?v=636784088547200000&width=800&height=800&aspect=true',
        name: 'Canada Dry',
        type: 'Ginger Ale',
        description: 'Refresco de jengibre con burbujas suaves y sabor refrescante.',
      },
      {
        id: 15,
        image: 'https://www.tiendashoppi.com/cdn/shop/files/tienda-shoppi-refresco-sunkist-min.jpg?v=1688415684',
        name: 'Sunkist',
        type: 'Refresco de naranja',
        description: 'Sabor vibrante y cítrico de la naranja para disfrutar en cualquier ocasión.',
      },
      {
        id: 16,
        image: 'https://m.media-amazon.com/images/I/91A7h0R39LL._AC_UF894,1000_QL80_.jpg',
        name: 'Barq\'s',
        type: 'Root Beer con cafeína',
        description: 'Refresco de raíz con un toque de cafeína para mantenerse alerta.',
      },
      {
        id: 17,
        image: 'https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/767x1021/9df78eab33525d08d6e5fb8d27136e95/2/4/x2413.jpg.pagespeed.ic.xqnQ4zt41V.jpg',
        name: 'Aquarius',
        type: 'Bebida isotónica',
        description: 'Bebida refrescante y rehidratante para momentos activos y deportivos.',
      },
      {
        id: 18,
        image: 'https://m.media-amazon.com/images/I/416QcPnCfQL.jpg',
        name: 'Tahiti',
        type: 'Refresco tropical',
        description: 'Sabores exóticos para transportarte a un paraíso tropical con cada sorbo.',
      },
      {
        id: 19,
        image: 'https://chedrauimx.vtexassets.com/arquivos/ids/21954908-800-auto?v=638350806802900000&width=800&height=auto&aspect=true',
        name: 'Lipton Ice Tea',
        type: 'Té helado',
        description: 'Té helado con sabores variados para disfrutar en cualquier estación.',
      },
      {
        id: 20,
        image: 'https://i5.walmartimages.com/asr/9cc2d434-2b53-4678-9097-92a8f1eeb516_1.2b87390a8d51f7af04296089d07e3270.png',
        name: 'Aloha Maid',
        type: 'Bebida de piña',
        description: 'Bebida de piña refrescante con el espíritu de aloha en cada botella.',
      },
    // Add more refrescos as needed
  ];

  const handleRefrescoClick = (refrescoId) => {
    setSelectedRefresco(refrescoId);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRefrescos = refrescos.filter((refresco) =>
    refresco.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderRefrescos = () => {
    return filteredRefrescos.map((refresco) => (
      <div key={refresco.id} className={`card ${selectedRefresco === refresco.id ? 'selected' : ''}`} onClick={() => handleRefrescoClick(refresco.id)}>
        <img src={refresco.image} alt={refresco.name} />

        <div>
          <h2>{refresco.name}</h2>
          <h3>{refresco.type}</h3>
          <p>{refresco.description}</p>
          <button>Comprar</button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <input className='search-bar' type="text" placeholder="Buscar refresco..." value={searchTerm} onChange={handleSearchChange} />
      <div className="mis-proyectos">
        {renderRefrescos()}
      </div>
      
    </div>
  );
}

export default App;