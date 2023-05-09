import React, {useEffect, useState} from 'react';
import CreateHeader from './header/header';
import Object from './ObjectDiv/object';
import LogoMorado from "./imagenes/LogoMorado.png"
import ImagenText from "./imagenes/ImagenText.png"
import MayorMenor from "./imagenes/MayorMenor.png"
import Caja from "./imagenes/Caja.png"
import Mundo from "./imagenes/Mundo.png"
import CreateImg from './imgs/imgs'
import Instalation from './instalations/instalation';
import CreateExtras from './extras/extras';
import Icon from './Icon/icon';
import TextLink1 from './textwlink/textwlink1';
import TextLink2 from './textwlink/textwlink2';
import TextLink3 from './textwlink/textwlink3';
import Copylinks from './copyLinks/copylinks';
import WebPack from "./imagenes/WebPack.png"
import Parcel from "./imagenes/Parcel.png"
import Vite from "./imagenes/Vite.png"
import Sass from "./imagenes/Sass.png"
import Copy from './copy/copy';
import CopyText1 from "./imagenes/CopyText1.png";
import CopyText2 from "./imagenes/CopyText2.png";
import CopyText3 from "./imagenes/CopyText3.png";
import CopyText4 from "./imagenes/CopyText4.png";
import CopyText5 from "./imagenes/CopyText5.png";
import Text1Link from './textwlink/textw1link';
import Llaves from "./imagenes/Llaves.png";
import TextLink4 from './textwlink/textwlink4';
import TextnLink from './textwlink/textwnlink';
import books from "./imagenes/books.png";
import Menu3 from "./menu/menu3";
import LlavesAst from "./imagenes/LlavesAst.png";
import TextLink5 from './textwlink/textwlink5';
import TextLink6 from './textwlink/textwlink6';
import MenuHorizontal from './menuHorizontal/menuHOrizontal';
import MenuHorizontal2 from './menuHorizontal/menuHorizontal2';
import CopylinksManual from './copyLinks/copylinksManual';
import Enchufe from "./imagenes/Enchufe.png";
import CreateFooter from './footer/footer';
import CopylinksManual2 from './copyLinks/copylinksManual2';
import TextLink7 from './textwlink/textwlink7';
import CreatePlugin from './plugins/plugins';
import './app.css'

export default function CreateApp(){    
    const Dropdown = [{modo: 'Dropdown item'},{modo: 'Dropdown item'},{modo: 'Dropdown item'}];
    return(
        <>  
            <CreateHeader/>
            
            <div className='Contenido'>
                <div className='Contenido2'>
                    <Object clase={'botonNewV'} text={'New in v5.3'}></Object>
                    <Object clase={'TextHeader'} text={'Color mode support, expanded color palette, and more!'}></Object>
                </div>
                <div className='ContenidoImagen'>
                    <CreateImg clase={'LogoMorado'} src={LogoMorado}></CreateImg>
                </div>
                <div className='Contenido3'>
                    <Object clase={'BigTitle'} text={'Build fast, responsive sites with Bootstrap'}></Object>
                    <Object clase={'SmallTitle'} 
                    text={'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.'}>
                    </Object>
                </div>
                <div className='Contenido4'>
                    <Object clase={'BotonRead'} text={'🕮 Read the docs'}></Object>
                    <Instalation clase={'FirstInstalation'} textclase={'FirstText'}
                    text={'npm i bootstrap@5.3.0-alpha3'} pop={'PopMessage1'} tri={'Triangle1'}></Instalation>
                </div>
                <div className='Contenido5'>
                    <CreateExtras></CreateExtras>
                </div>
                <div className='ContenidoImagen2'>
                    <CreateImg clase={'ImagenText'} src={ImagenText}></CreateImg>
                </div>
                <div className='Contenido6'>
                    <Icon clase={'MayorMenor'} imgClase={'ImgMayorMenor'} src={MayorMenor}></Icon>
                </div>
                <div className='Contenido7'>
                    <Object clase={'GetStarted'} text={'Get started any way you want'}></Object>
                    <Object clase={'subText'} text={'Jump right into building with Bootstrap—use the CDN, install it via package manager, or download the source code.'}></Object>
                </div>
                <div className='InstalationsDocs'>
                    <Object clase={'Instalationtext'} text={'Read installation docs'}></Object>
                    <Object clase={'Instalationflecha'} text={'→'}></Object>
                </div>
                <div className='Contenido8'>
                    <div className='Izquierda'>
                        <CreateImg clase={'Caja'} src={Caja}></CreateImg>
                        <Object clase={'BoxTitle'} text={'Install via package manager'}></Object>
                        <TextLink1></TextLink1>
                        <Instalation clase={'Instalation2'} textclase={'Itext2'}
                            text={'npm install bootstrap@5.3.0-alpha3'} pop={'PopMessage2'} tri={'Triangle2'}></Instalation>
                        <Instalation clase={'Instalation2'} textclase={'Itext2'}
                            text={'gem install bootstrap -v 5.3.0.alpha3'} pop={'PopMessage3'} tri={'Triangle3'}></Instalation>
                            <TextLink3></TextLink3>
                    </div>
                    <div className='Derecha'>
                        <CreateImg clase={'Mundo'} src={Mundo}></CreateImg>
                        <Object clase={'BoxTitle'} text={'Include via CDN'}></Object>
                        <TextLink2></TextLink2>
                        <Copylinks clase={'CopyLink1'} textclase={'TCopy1'} 
                            text={'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">'}
                            pop={'Pop1'} tri={'Tri1'}>                            
                            </Copylinks>
                        <Copylinks clase={'CopyLink2'} textclase={'TCopy1'}
                            text={'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>'}
                            pop={'Pop2'} tri={'Tri2'}>                            
                        </Copylinks>
                    </div>
                </div>
                <div className='Contenido9'>
                    <Object clase={'ReadTitle'} text={'Read our getting started guides'} ></Object>
                    <Object clase={'GetText'} text={"Get a jump on including Bootstrap's source files in a new project with our official guides."}></Object>
                </div>
                <div className='ContImagenes'>
                    <div className='subContainer'>
                        <CreateImg clase={'WebPack'} src={WebPack}></CreateImg>
                        <Object clase={'WebpackText'} text={'Webpack'}></Object>
                    </div>
                    <div className='subContainer'>
                        <CreateImg clase={'Parcel'} src={Parcel}></CreateImg>
                        <Object clase={'ParcelText'} text={'Parcel'}></Object>
                    </div>
                    <div className='subContainer'>
                        <CreateImg clase={'Vite'} src={Vite}></CreateImg>
                        <Object clase={'ViteText'} text={'Vite'}></Object>
                    </div>
                </div>
                <div className='Contenido10'> 
                    <Icon clase={'Sass'} imgClase={'ImgSass'} src={Sass}></Icon>
                    <Object clase={'Customize'} text={'Customize everything with Sass'}></Object>
                    <Object clase={'subTextCust'} text={'Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.'}></Object>
                    <div className='ContainerFlecha'>
                        <Object clase={'Instalationtext'} text={'Learn more about customizing'}></Object>
                        <Object clase={'Instalationflecha'} text={'→'}></Object>
                    </div>                    
                </div>
                <div className='Contenido11'>
                    <div className='Izquierda2'>
                        <Object clase={'BoxTitle'} text={'Include all of Bootstrap’s Sass'}></Object>
                        <Object clase={'BoxSubTitle'} text={"Import one stylesheet and you're off to the races with every feature of our CSS."}></Object>
                        <Copy clase={'CopyText1'} textclase={'BoxCopyText1'} src={CopyText1}
                        claseimg={'TextImg1'} pop={'imgPop1'} tri={'imgTri1'}></Copy>
                        <Text1Link normalText={'Learn more about our'}
                        linkedText={'global Sass options'}></Text1Link>
                    </div>
                    <div className='Derecha2'>
                        <Object clase={'BoxTitle'} text={'Include what you need'}></Object>
                        <Object clase={'BoxSubTitle'} text={"The easiest way to customize Bootstrap—include only the CSS you need."}></Object>
                        <Copy clase={'CopyText1'} textclase={'BoxCopyText2'} src={CopyText2}
                        claseimg={'TextImg2'} pop={'imgPop2'} tri={'imgTri2'}></Copy>
                        <Text1Link normalText={'Learn more about our'}
                        linkedText={'using Bootstrap with Sass'}></Text1Link>
                    </div>
                </div>
                <div className='Contenido10'> 
                    <Icon clase={'Llaves'} imgClase={'imgLlaves'} src={Llaves}></Icon>
                    <Object clase={'Customize'} text={'Build and extend in real-time with CSS variables'}></Object>
                    <Object clase={'subTextCust2'} text={'Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a :root level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.'}></Object>
                    <div className='ContainerFlecha'>
                        <Object clase={'Instalationtext'} text={'Learn more about CSS variables'}></Object>
                        <Object clase={'Instalationflecha'} text={'→'}></Object>
                    </div>    
                </div>
                <div className='Contenido11'>
                    <div className='Izquierda2'>
                        <Object clase={'BoxTitle'} text={'Using CSS variables'}></Object>
                        <TextLink4></TextLink4>
                        <Copy clase={'CopyText1'} textclase={'BoxCopyText3'} src={CopyText3}
                        claseimg={'TextImg3'} pop={'imgPop3'} tri={'imgTri3'}></Copy>
                    </div>
                    <div className='Derecha2'>
                        <Object clase={'BoxTitle'} text={'Customizing via CSS variables'}></Object>
                        <TextnLink text={'Override global, component, or utility class variables to customize Bootstrap just how you like. No need to redeclare each rule, just a new variable value.'}></TextnLink>
                        <Copy clase={'CopyText1'} textclase={'BoxCopyText4'} src={CopyText4}
                        claseimg={'TextImg4'} pop={'imgPop4'} tri={'imgTri4'}></Copy>
                    </div>
                </div>
                <div className='Contenido12'>
                    <Icon clase={'books'} imgClase={'imgbooks'} src={books}></Icon>
                    <Object clase={'mas'} text={'+'}></Object>
                    <Icon clase={'LlavesAst'} imgClase={'imgLlavesAst'} src={LlavesAst}></Icon>
                </div>
                <div className='Contenido13'>
                    <Object clase={'Customize'} text={'Components, meet the Utility API'}></Object>
                    <TextLink5 firstText={'New in Bootstrap 5, our utilities are now generated by our'}
                    linkedText={'Utility API.'}
                    secondText={"We built it as a feature-packed Sass map that can be quickly and easily customized. It's never been easier to add, remove, or modify any utility classes. Make utilities responsive, add pseudo-class variants, and give them custom names."}
                    ></TextLink5>
                </div>
                <div className='Contenido14'>
                    <div className='Izquierda2'>
                        <Object clase={'BoxTitle'} text={'Quickly customize components'}></Object>
                        <TextLink6></TextLink6>
                        <div className='ContainerMenus'>
                            <MenuHorizontal></MenuHorizontal>
                            <MenuHorizontal2></MenuHorizontal2>
                        </div>
                        <CopylinksManual clase={'CopyLink3'} textclase={'TCopy1'}
                            pop={'Pop3'} tri={'Tri3'}>                            
                        </CopylinksManual>
                        <div className='ContainerFlechader'>
                            <Object clase={'Instalationtext'} text={'Explore customized components'}></Object>
                            <Object clase={'Instalationflecha'} text={'→'}></Object>
                        </div> 
                    </div>
                    <div className='Derecha2'>
                        <Object clase={'BoxTitle'} text={'Create and extend utilities'}></Object>
                        <TextnLink text={"Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project. Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities."}></TextnLink>
                        <Copy clase={'CopyText1'} textclase={'BoxCopyText5'} src={CopyText5}
                        claseimg={'TextImg5'} pop={'imgPop5'} tri={'imgTri5'}></Copy>
                        <div className='ContainerFlechader'>
                            <Object clase={'Instalationtext'} text={'Explore the utility API'}></Object>
                            <Object clase={'Instalationflecha'} text={'→'}></Object>
                        </div> 
                    </div>
                </div>
                <div className='Contenido15'>
                    <Icon clase={'Enchufe'} imgClase={'imgEnchufe'} src={Enchufe}></Icon>
                    <Object clase={'Customize'} text={'Powerful JavaScript plugins without jQuery'}></Object>
                    <Object clase={'subTextCust2'} text={"Add toggleable hidden elements, modals and offcanvas menus, popovers and tooltips, and so much more—all without jQuery. Bootstrap's JavaScript is HTML-first, meaning most plugins are added with data attributes in your HTML. Need more control? Include individual plugins programmatically."}></Object>
                    <div className='ContainerFlecha'>
                        <Object clase={'Instalationtext'} text={'Learn more about Bootstrap JavaScript'}></Object>
                        <Object clase={'Instalationflecha'} text={'→'}></Object>
                    </div> 
                </div>
                <div className='Contenido16'>
                    <div className='Izquierda2'>
                        <Object clase={'BoxTitle'} text={'Data attribute API'}></Object>
                        <Object clase={'BoxSubTitle'} text={"Why write more JavaScript when you can write HTML? Nearly all of Bootstrap's JavaScript plugins feature a first-class data API, allowing you to use JavaScript just by adding data attributes."}></Object>
                        <div className='ContainerDropdown'>
                            <Menu3 inicio={'Dropdown ⏷'} elements={Dropdown}/>
                        </div>
                        <CopylinksManual2 clase={'CopyLink3'} textclase={'TCopy1'}
                            pop={'Pop4'} tri={'Tri4'}>                            
                        </CopylinksManual2>
                        <TextLink7></TextLink7>
                    </div>
                    <div className='Derecha2'>
                        <Object clase={'BoxTitle'} text={'Comprehensive set of plugins'}></Object>
                        <Object clase={'BoxSubTitle'} text={"Bootstrap features a dozen plugins that you can drop into any project. Drop them in all at once, or choose just the ones you need"}></Object>
                        <div className='PluginsCointainer'>
                            <div className='plugininterno'>
                                <div className='izquierdaInterno'>
                                    <CreatePlugin title={'Alert'} text={'Show and hide alert messages to your users.'}></CreatePlugin>
                                </div>
                                <div className='derechaInterno'>
                                    <CreatePlugin title={'Button'} text={'Programmatically control the active state for buttons.'}></CreatePlugin>
                                </div>
                            </div>
                            <div className='plugininterno'>
                                <div className='izquierdaInterno'>
                                    <CreatePlugin title={'Carousel'} text={'Add slideshows to any page, including support for crossfade.'}></CreatePlugin>
                                </div>
                                <div className='derechaInterno'>
                                    <CreatePlugin title={'Collapse'} text={'Expand and collapse areas of content, or create accordions.'}></CreatePlugin>
                                </div>
                            </div>
                            <div className='plugininterno'>
                                <div className='izquierdaInterno'>
                                    <CreatePlugin title={'Dropdown'} text={'Create menus of links, actions, forms, and more.'}></CreatePlugin>
                                </div>
                                <div className='derechaInterno'>
                                    <CreatePlugin title={'Modal'} text={'Add flexible and responsive dialogs to your project'}></CreatePlugin>
                                </div>
                            </div>
                            <div className='plugininterno'>
                                <div className='izquierdaInterno'>
                                    <CreatePlugin title={'Offcanvas'} text={'Build and toggle hidden sidebars into any page.'}></CreatePlugin>
                                </div>
                                <div className='derechaInterno'>
                                    <CreatePlugin title={'Popover'} text={'Create custom overlays. Built on Popper.'}></CreatePlugin>
                                </div>
                            </div>
                            <div className='plugininterno'>
                                <div className='izquierdaInterno'>
                                    <CreatePlugin title={'Scrollspy'} text={'Automatically update active nav links based on page scroll'}></CreatePlugin>
                                </div>
                                <div className='derechaInterno'>
                                    <CreatePlugin title={'Tab'} text={'Allow Bootstrap nav components to toggle contents.'}></CreatePlugin>
                                </div>
                            </div>
                            <div className='plugininterno'>
                                <div className='izquierdaInterno'>
                                    <CreatePlugin title={'Toast'} text={'Show and hide notifications to your visitors'}></CreatePlugin>
                                </div>
                                <div className='derechaInterno'>
                                    <CreatePlugin title={'Tooltip'} text={'Replace browser tooltips with custom ones. Built on Popper.'}></CreatePlugin>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <CreateFooter/>
        </>
    )
}