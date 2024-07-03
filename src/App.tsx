import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import CatalogHome from './Pages/catalog/catalogHome';
import CatalogItemPage from './Pages/catalog/foodVendor/CatalogItemPage';
import EachItemCatalog from './Pages/catalog/foodVendor/yakoyo/EachItemCatalog';
import RosticksPage from './Pages/catalog/foodVendor/rosticks/RosticksPage';
import ChickenRep from './Pages/catalog/foodVendor/chickenRep/ChickenRep';
import JowiCuisine from './Pages/catalog/foodVendor/jowiCuisine/JowiCuisine';
import ChefSammie from './Pages/catalog/foodVendor/chefSammie/ChefSammie';
import AmbrosyDelight from './Pages/catalog/foodVendor/ambrosyDe/AmbrosyDelight';
import LizGrill from './Pages/catalog/foodVendor/liz/LizGrill';
import RestaurantsHome from './Pages/catalog/restaurants/RestaurantsHome';
import SupermarketHome from './Pages/catalog/supermarket/SupermarketHome';
import CinemasHome from './Pages/catalog/cinemas/CinemasHome';
import ParksHome from './Pages/catalog/parks/ParksHome';
import GymsHome from './Pages/catalog/gym/GymsHome';
import PharmacyHome from './Pages/catalog/pharmacy/PharmacyHome';
import AmenitiesHome from './Pages/amenities/AmenitiesHome';
import ContactUs from './Pages/contact/ContactUs';
import BookNow from './Pages/BookNow';
import Wifi from './Pages/amenities/Wifi';
import BelfastPharmacy from './Pages/catalog/pharmacy/BelfastPharmacy';
import BolePlus from './Pages/catalog/restaurants/BolePlus';
import RosticksPizza from './Pages/catalog/restaurants/RosticksPizza';
import MatthansShawarma from './Pages/catalog/restaurants/MatthansShawarma';
import DominosPizza from './Pages/catalog/restaurants/DominosPizza';
import FoodDynasty from './Pages/catalog/restaurants/FoodDynasty';
import BlossomDelight from './Pages/catalog/restaurants/BlossomDelight';
import MandarinChinese from './Pages/catalog/restaurants/MandarinChinese';
import Ski from './Pages/catalog/restaurants/Ski';
import ChinaWork from './Pages/catalog/restaurants/ChinaWork';
import DkkPlaza from './Pages/catalog/supermarket/DkkPlaza';
import Skymart from './Pages/catalog/supermarket/Skymart';
import Blenco from './Pages/catalog/supermarket/Blenco';
import Emrite from './Pages/catalog/supermarket/Emrite';
import Zira from './Pages/catalog/supermarket/Zira';
import Ebeano from './Pages/catalog/supermarket/Ebeano';
import MarketHome from './Pages/catalog/market/MarketHome';
import Sangotedo from './Pages/catalog/market/Sangotedo';
import AjahJubilee from './Pages/catalog/market/AjahJubilee';
import Elegushi from './Pages/catalog/market/Elegushi';
import Lekki from './Pages/catalog/market/Lekki';
import NewAddo from './Pages/catalog/market/NewAddo';
import NewRoadLekki from './Pages/catalog/market/NewRoadLekki';
import Epikaizo from './Pages/catalog/market/Epikaizo';
import LoungeHome from './Pages/catalog/lounge/LoungeHome';
import Yabas from './Pages/catalog/lounge/Yabas';
import SplashBar from './Pages/catalog/lounge/SplashBar';
import ShadesExcecutives from './Pages/catalog/lounge/ShadesExcecutives';
import Ebony from './Pages/catalog/lounge/Ebony';
import Lufasi from './Pages/catalog/parks/Lufasi';
import Vgc from './Pages/catalog/parks/Vgc';
import LekkiPark from './Pages/catalog/parks/LekkiPark';
import Muri from './Pages/catalog/parks/Muri';
import Greenfingers from './Pages/catalog/parks/Greenfingers';
import Genesis from './Pages/catalog/gym/Genesis';
import IfitnesAjah from './Pages/catalog/gym/IfitnesAjah';
import IamFit from './Pages/catalog/gym/IamFit';
import IFitness from './Pages/catalog/gym/IFitness';
import Amplified from './Pages/catalog/gym/Amplified';
import IFitnessVgc from './Pages/catalog/gym/IFitnessVgc';
import PureFitness from './Pages/catalog/gym/PureFitness';
import GoFitness from './Pages/catalog/gym/GoFitness';
import SkyCinema from './Pages/catalog/cinemas/SkyCinema';
import GenesisCinema from './Pages/catalog/cinemas/GenesisCinema';
import WorkstationHome from './Pages/catalog/workstations/WorkstationHome';
import GncPharmacy from './Pages/catalog/pharmacy/GncPharmacy';
import DkkPharmacy from './Pages/catalog/pharmacy/DkkPharmacy';
import Pharmacy24 from './Pages/catalog/pharmacy/Pharmacy24';
import TechEvery from './Pages/catalog/workstations/TechEvery';
import TheKave from './Pages/catalog/workstations/TheKave';
import GenesiDeluxe from './Pages/catalog/cinemas/GenesiDeluxe';
import FilmhouseIkota from './Pages/catalog/cinemas/FilmhouseIkota';
import FilmhouseImax from './Pages/catalog/cinemas/FilmhouseImax';
import GrandCinemas from './Pages/catalog/cinemas/GrandCinemas';
import Silverbird from './Pages/catalog/cinemas/Silverbird';
import FilmhouseLekkiP from './Pages/catalog/cinemas/FilmhouseLekkiP';
import PersonalShopperHome from './Pages/catalog/personalShopper/PersonalShopperHome';
import Kwickmall from './Pages/catalog/personalShopper/Kwickmall';
import Kaybee from './Pages/catalog/personalShopper/Kaybee';
import BeachesHome from './Pages/catalog/beaches/BeachesHome';
import Atican from './Pages/catalog/beaches/Atican';
import LovingLagos from './Pages/catalog/beaches/LovingLagos';
import SantaCruz from './Pages/catalog/beaches/SantaCruz';
import MrNollywood from './Pages/catalog/beaches/MrNollywood';
import Royalty from './Pages/catalog/beaches/Royalty';
import KidsBeach from './Pages/catalog/beaches/KidsBeach';
import AlphaBeach from './Pages/catalog/beaches/AlphaBeach';
import ElegushiBe from './Pages/catalog/beaches/ElegushiBe';
import EpikaizoBoutiques from './Pages/catalog/boutique/EpikaizoBoutiques';
import TheraAnnex from './Pages/catalog/pharmacy/TheraAnnex';
import Elmickey from './Pages/catalog/pharmacy/Elmickey';

function App() {
  return (
    <div className="App">
  <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/catalog" element={<CatalogHome/>}/>
  <Route  path="/catalog/food-vendor" element={<CatalogItemPage/>}/>
  <Route  path="/catalog/food-vendor/yakoyo" element={<EachItemCatalog/>}/>
  <Route  path="/catalog/food-vendor/rosticks" element={<RosticksPage/>}/>
  <Route  path="/catalog/food-vendor/chicken-republic" element={<ChickenRep/>}/>
  <Route  path="/catalog/food-vendor/jowi-cuisine" element={<JowiCuisine/>}/>
  <Route  path="/catalog/food-vendor/chef-sammie" element={<ChefSammie/>}/>
  <Route  path="/catalog/food-vendor/ambrosy-delight-parfait" element={<AmbrosyDelight/>}/>
  <Route  path="/catalog/food-vendor/liz-grills" element={<LizGrill/>}/>

  <Route  path="/catalog/restaurants" element={<RestaurantsHome/>}/>
  <Route  path="/catalog/restaurants/bole-plus" element={<BolePlus/>}/>
  <Route  path="/catalog/restaurants/rosticks-pizza" element={<RosticksPizza/>}/>
  <Route  path="/catalog/restaurants/matthans-shawarma" element={<MatthansShawarma/>}/>
  <Route  path="/catalog/restaurants/dominos-pizza" element={<DominosPizza/>}/>
  <Route  path="/catalog/restaurants/food-dynasty" element={<FoodDynasty/>}/>
  <Route  path="/catalog/restaurants/blossom-delight" element={<BlossomDelight/>}/>
  <Route  path="/catalog/restaurants/mandarin-chinese" element={<MandarinChinese/>}/>
  <Route  path="/catalog/restaurants/ski" element={<Ski/>}/>
  <Route  path="/catalog/restaurants/china-work" element={<ChinaWork/>}/>



  <Route  path="/amenities" element={<AmenitiesHome/>}/>
  <Route  path="/amenities/wifi" element={<Wifi/>}/>
  <Route  path="/contact" element={<ContactUs/>}/>
  <Route  path="/book-now" element={<BookNow/>}/>
 
 
 
  <Route  path="/catalog/supermarket" element={<SupermarketHome/>}/>
  <Route  path="/catalog/supermarket/dkk-plaza" element={<DkkPlaza/>}/>
  <Route  path="/catalog/supermarket/skymart" element={<Skymart/>}/>
  <Route  path="/catalog/supermarket/blenco" element={<Blenco/>}/>
  <Route  path="/catalog/supermarket/emrite" element={<Emrite/>}/>
  <Route  path="/catalog/supermarket/zira" element={<Zira/>}/>
  <Route  path="/catalog/supermarket/ebeano" element={<Ebeano/>}/>
  
  <Route  path="/catalog/market" element={<MarketHome/>}/>
  <Route  path="/catalog/market/sangotedo" element={<Sangotedo/>}/>
  <Route  path="/catalog/market/ajah-jubilee-bridge" element={<AjahJubilee/>}/>
  <Route  path="/catalog/market/elegushi" element={<Elegushi/>}/>
  <Route  path="/catalog/market/lekki" element={<Lekki/>}/>
  <Route  path="/catalog/market/new-addo" element={<NewAddo/>}/>
  <Route  path="/catalog/market/new-road-lekki" element={<NewRoadLekki/>}/>
  <Route  path="/catalog/market/epikaizo" element={<Epikaizo/>}/>

  <Route  path="/catalog/lounge" element={<LoungeHome/>}/>
  <Route  path="/catalog/lounge/yaBas-kitchen" element={<Yabas/>}/>
  <Route  path="/catalog/lounge/splash-bar" element={<SplashBar/>}/>
  <Route  path="/catalog/lounge/shades-excecutives" element={<ShadesExcecutives/>}/>
  <Route  path="/catalog/lounge/ebony" element={<Ebony/>}/>

  
  <Route  path="/catalog/cinemas" element={<CinemasHome/>}/>
  <Route  path="/catalog/cinemas/sky-cinema" element={<SkyCinema/>}/>
  <Route  path="/catalog/cinemas/genesis-cinema" element={<GenesisCinema/>}/>
  <Route  path="/catalog/cinemas/genesis-deluxe-cinema" element={<GenesiDeluxe/>}/>
  <Route  path="/catalog/cinemas/filmhouse-cinema-ikota" element={<FilmhouseIkota/>}/>
  <Route  path="/catalog/cinemas/filmhouse-cinema-imax" element={<FilmhouseImax/>}/>
  <Route  path="/catalog/cinemas/grand-cinemas" element={<GrandCinemas/>}/>
  <Route  path="/catalog/cinemas/silverbird" element={<Silverbird/>}/>
  <Route  path="/catalog/cinemas/filmhouse-cinema-lekki" element={<FilmhouseLekkiP/>}/>
  {/* <Route  path="/catalog/cinemas" element={<CinemasHome/>}/> */}

  <Route  path="/catalog/boutique/epikaizo" element={<EpikaizoBoutiques/>}/>


  <Route  path="/catalog/parks" element={<ParksHome/>}/>
  <Route  path="/catalog/parks/lufasi" element={<Lufasi/>}/>
  <Route  path="/catalog/parks/vgc" element={<Vgc/>}/>
  <Route  path="/catalog/parks/lekki" element={<LekkiPark/>}/>
  <Route  path="/catalog/parks/muri-okunola" element={<Muri/>}/>
  <Route  path="/catalog/parks/greenfingers" element={<Greenfingers/>}/>


  <Route  path="/catalog/gyms" element={<GymsHome/>}/>
  <Route  path="/catalog/gyms/genesis-fitness" element={<Genesis/>}/>
  <Route  path="/catalog/gyms/i-fitness-ajah" element={<IfitnesAjah/>}/>
  <Route  path="/catalog/gyms/i-am-fit" element={<IamFit/>}/>
  <Route  path="/catalog/gyms/i-fitness" element={<IFitness/>}/>
  <Route  path="/catalog/gyms/amplified" element={<Amplified/>}/>
  <Route  path="/catalog/gyms/i-fitness-vgc" element={<IFitnessVgc/>}/>
  <Route  path="/catalog/gyms/pure-fitness" element={<PureFitness/>}/>
  <Route  path="/catalog/gyms/go-fitness" element={<GoFitness/>}/>

  <Route  path="/catalog/beaches" element={<BeachesHome/>}/>
  <Route  path="/catalog/beaches/atican" element={<Atican/>}/>
  <Route  path="/catalog/beaches/loving-lagos" element={<LovingLagos/>}/>
  <Route  path="/catalog/beaches/elegushi" element={<ElegushiBe/>}/>
  <Route  path="/catalog/beaches/santa-cruz" element={<SantaCruz/>}/>
  <Route  path="/catalog/beaches/mr-nollywood" element={<MrNollywood/>}/>
  <Route  path="/catalog/beaches/royalty" element={<Royalty/>}/>
  <Route  path="/catalog/beaches/kids" element={<KidsBeach/>}/>
  <Route  path="/catalog/beaches/alpha" element={<AlphaBeach/>}/>


  <Route  path="/catalog/workstation" element={<WorkstationHome/>}/>
  <Route  path="/catalog/workstation/techevery" element={<TechEvery/>}/>
  <Route  path="/catalog/workstation/thekave" element={<TheKave/>}/>

  <Route  path="/catalog/personal-shopper" element={<PersonalShopperHome/>}/>
  <Route  path="/catalog/personal-shopper/kwickmall" element={<Kwickmall/>}/>
  <Route  path="/catalog/personal-shopper/kaybee" element={<Kaybee/>}/>

  <Route  path="/catalog/pharmacy" element={<PharmacyHome/>}/>
  <Route  path="/catalog/pharmacy/belfast" element={<BelfastPharmacy/>}/>
  <Route  path="/catalog/pharmacy/gnc" element={<GncPharmacy/>}/>
  <Route  path="/catalog/pharmacy/dkk" element={<DkkPharmacy/>}/>
  <Route  path="/catalog/pharmacy/pharmacy24" element={<Pharmacy24/>}/>
  <Route  path="/catalog/pharmacy/thera-annex" element={<TheraAnnex/>}/>
  <Route  path="/catalog/pharmacy/elmickey" element={<Elmickey/>}/>


  
  </Routes>
    </div>
  );
}

export default App;
