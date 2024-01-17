import './App.css';
import Products from './components/Products';
import {   Route, Routes, HashRouter } from 'react-router-dom';
import ProductsDetails from './components/ProductsDetails';
const products = [
  {
    id: 1,
    reference: 'MDG-001',
    image: 'Tenu1.PNG',
    libelle: 'Maillot Domicile Green',
    prix: '490.00 DH',
    tailles: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    reference: 'MDW-002',
    image: 'Tenu2.PNG',
    libelle: 'Maillot Domicile White',
    prix: '490.00 DH',
    tailles: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    reference: 'RCA-003',
    image: 'Tenu3.PNG',
    libelle: 'Polo Raja club athletic Black',
    prix: '300.00 DH',
    tailles: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4,
    reference: 'RCG-004',
    image: 'Tenu4.PNG',
    libelle: 'Polo Raja club Green',
    prix: '300.00 DH',
    tailles: ['S', 'M', 'L', 'XL']
  },
  {
    id: 5,
    reference: 'MDB-005',
    image: 'Tenu5.PNG',
    libelle: 'Maillot Domicile Black',
    prix: '500.00 DH',
    tailles: ['S', 'M', 'L', 'XL']
  },
  {
    id: 6,
    reference: 'MEG-006',
    image: 'Tenu6.png',
    libelle: 'Maillot Entrain Green',
    prix: '500.00 DH',
    tailles: ['S', 'M', 'L', 'XL']
  },
  {
    id: 7,
    reference: 'MEG-007',
    image: 'Tenu7.png',
    libelle: 'Maillot Entrain Green',
    prix: '500.00 DH',
    tailles: ['S', 'M', 'L', 'XL']
  },
  {
    id: 8,
    reference: 'SKC-008',
    image: 'sac.png',
    libelle: 'Sac de Voyage Keepall en Cuir',
    prix: '1490.00 DH',
    tailles: ['Taille unique']
  },
  {
    id: 9,
    reference: 'SDC-009',
    image: 'sac2.png',
    libelle: 'Sac à dos Keepall en Cuir',
    prix: '1490.00 DH',
    tailles: ['Taille unique']
  },
  {
    id: 10,
    reference: 'SDC-010',
    image: 'sac3.png',
    libelle: 'Sac à dos Keepall en Cuir',
    prix: '1290.00 DH',
    tailles: ['Taille unique']
  },
  {
    id: 11,
    reference: 'LEG-011',
    image: 'lunet1.jpg',
    libelle: 'Lunettes "EagleGaze"',
    prix: '319.00 DH',
    tailles: ['Taille unique']
  },
  {
    id: 12,
    reference: 'LSO-012',
    image: 'lunet2.png',
    libelle: 'Lunettes "SylvanSoar"',
    prix: '390.00 DH',
    tailles: ['Taille unique']
  },
  {
    id: 13,
    reference: 'LSO-013',
    image: 'cas1.png',
    libelle: 'Lunettes "SylvanSoar"',
    prix: '99.00 DH',
    tailles: ['Taille unique']
  },
  {
    id: 14,
    reference: 'PRW-014',
    image: 'Pull1.PNG',
    libelle: 'Pull white Raja club',
    prix: '299.00 DH',
    tailles: ['S', 'M', 'L', 'XL']
  },
  {
    id: 15,
    reference: 'PRW-015',
    image: 'Pull2.PNG',
    libelle: 'Pull white Raja club',
    prix: '299.00 DH',
    tailles: ['S', 'M', 'L', 'XL']
  },
];


function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path='/' index element={<Products products={products}/>}/>
        <Route path='/ProductsDetails/:id'  element={<ProductsDetails products={products}/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
