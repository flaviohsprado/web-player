'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">web-player documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AlbumModule.html" data-type="entity-link" >AlbumModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AlbumModule-73ee306c408b7dbeae8fe7b8ad6524d8b77b0a9638151384979fdff04e42203dcd48335083c51ff31f492b47599d810f6da8652fe3c9e752b333ad76a09229a8"' : 'data-target="#xs-controllers-links-module-AlbumModule-73ee306c408b7dbeae8fe7b8ad6524d8b77b0a9638151384979fdff04e42203dcd48335083c51ff31f492b47599d810f6da8652fe3c9e752b333ad76a09229a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AlbumModule-73ee306c408b7dbeae8fe7b8ad6524d8b77b0a9638151384979fdff04e42203dcd48335083c51ff31f492b47599d810f6da8652fe3c9e752b333ad76a09229a8"' :
                                            'id="xs-controllers-links-module-AlbumModule-73ee306c408b7dbeae8fe7b8ad6524d8b77b0a9638151384979fdff04e42203dcd48335083c51ff31f492b47599d810f6da8652fe3c9e752b333ad76a09229a8"' }>
                                            <li class="link">
                                                <a href="controllers/AlbumController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlbumController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AlbumModule-73ee306c408b7dbeae8fe7b8ad6524d8b77b0a9638151384979fdff04e42203dcd48335083c51ff31f492b47599d810f6da8652fe3c9e752b333ad76a09229a8"' : 'data-target="#xs-injectables-links-module-AlbumModule-73ee306c408b7dbeae8fe7b8ad6524d8b77b0a9638151384979fdff04e42203dcd48335083c51ff31f492b47599d810f6da8652fe3c9e752b333ad76a09229a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AlbumModule-73ee306c408b7dbeae8fe7b8ad6524d8b77b0a9638151384979fdff04e42203dcd48335083c51ff31f492b47599d810f6da8652fe3c9e752b333ad76a09229a8"' :
                                        'id="xs-injectables-links-module-AlbumModule-73ee306c408b7dbeae8fe7b8ad6524d8b77b0a9638151384979fdff04e42203dcd48335083c51ff31f492b47599d810f6da8652fe3c9e752b333ad76a09229a8"' }>
                                        <li class="link">
                                            <a href="injectables/AlbumService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlbumService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-f62d7755a2e302be057165f8e4c162857c07bcdb91bb826f549750661677973c8d8f2b99849a37af15ef97e35e9b7ef0d1defc69f9089807eec5a7a1b85b099b"' : 'data-target="#xs-controllers-links-module-AuthModule-f62d7755a2e302be057165f8e4c162857c07bcdb91bb826f549750661677973c8d8f2b99849a37af15ef97e35e9b7ef0d1defc69f9089807eec5a7a1b85b099b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-f62d7755a2e302be057165f8e4c162857c07bcdb91bb826f549750661677973c8d8f2b99849a37af15ef97e35e9b7ef0d1defc69f9089807eec5a7a1b85b099b"' :
                                            'id="xs-controllers-links-module-AuthModule-f62d7755a2e302be057165f8e4c162857c07bcdb91bb826f549750661677973c8d8f2b99849a37af15ef97e35e9b7ef0d1defc69f9089807eec5a7a1b85b099b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-f62d7755a2e302be057165f8e4c162857c07bcdb91bb826f549750661677973c8d8f2b99849a37af15ef97e35e9b7ef0d1defc69f9089807eec5a7a1b85b099b"' : 'data-target="#xs-injectables-links-module-AuthModule-f62d7755a2e302be057165f8e4c162857c07bcdb91bb826f549750661677973c8d8f2b99849a37af15ef97e35e9b7ef0d1defc69f9089807eec5a7a1b85b099b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-f62d7755a2e302be057165f8e4c162857c07bcdb91bb826f549750661677973c8d8f2b99849a37af15ef97e35e9b7ef0d1defc69f9089807eec5a7a1b85b099b"' :
                                        'id="xs-injectables-links-module-AuthModule-f62d7755a2e302be057165f8e4c162857c07bcdb91bb826f549750661677973c8d8f2b99849a37af15ef97e35e9b7ef0d1defc69f9089807eec5a7a1b85b099b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FileModule-6cda03ca3bf16174e5e0d45d929dac7a1c2ddfe53c3dbf200e8a0476335b6f6360bc48c25939d4cbc866cfd0b331b6f6c02fda85c9dadefaeb3051179a90ab8f"' : 'data-target="#xs-injectables-links-module-FileModule-6cda03ca3bf16174e5e0d45d929dac7a1c2ddfe53c3dbf200e8a0476335b6f6360bc48c25939d4cbc866cfd0b331b6f6c02fda85c9dadefaeb3051179a90ab8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileModule-6cda03ca3bf16174e5e0d45d929dac7a1c2ddfe53c3dbf200e8a0476335b6f6360bc48c25939d4cbc866cfd0b331b6f6c02fda85c9dadefaeb3051179a90ab8f"' :
                                        'id="xs-injectables-links-module-FileModule-6cda03ca3bf16174e5e0d45d929dac7a1c2ddfe53c3dbf200e8a0476335b6f6360bc48c25939d4cbc866cfd0b331b6f6c02fda85c9dadefaeb3051179a90ab8f"' }>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MusicModule.html" data-type="entity-link" >MusicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MusicModule-772431da9042a33c51b80e56730618a013738033d418ccb7fdd34a23214e0c333bbdd9066a4c37242d8f4ee59591ddc9d77d837780f02ae5478ed001bc62096b"' : 'data-target="#xs-controllers-links-module-MusicModule-772431da9042a33c51b80e56730618a013738033d418ccb7fdd34a23214e0c333bbdd9066a4c37242d8f4ee59591ddc9d77d837780f02ae5478ed001bc62096b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MusicModule-772431da9042a33c51b80e56730618a013738033d418ccb7fdd34a23214e0c333bbdd9066a4c37242d8f4ee59591ddc9d77d837780f02ae5478ed001bc62096b"' :
                                            'id="xs-controllers-links-module-MusicModule-772431da9042a33c51b80e56730618a013738033d418ccb7fdd34a23214e0c333bbdd9066a4c37242d8f4ee59591ddc9d77d837780f02ae5478ed001bc62096b"' }>
                                            <li class="link">
                                                <a href="controllers/MusicController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MusicController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MusicModule-772431da9042a33c51b80e56730618a013738033d418ccb7fdd34a23214e0c333bbdd9066a4c37242d8f4ee59591ddc9d77d837780f02ae5478ed001bc62096b"' : 'data-target="#xs-injectables-links-module-MusicModule-772431da9042a33c51b80e56730618a013738033d418ccb7fdd34a23214e0c333bbdd9066a4c37242d8f4ee59591ddc9d77d837780f02ae5478ed001bc62096b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MusicModule-772431da9042a33c51b80e56730618a013738033d418ccb7fdd34a23214e0c333bbdd9066a4c37242d8f4ee59591ddc9d77d837780f02ae5478ed001bc62096b"' :
                                        'id="xs-injectables-links-module-MusicModule-772431da9042a33c51b80e56730618a013738033d418ccb7fdd34a23214e0c333bbdd9066a4c37242d8f4ee59591ddc9d77d837780f02ae5478ed001bc62096b"' }>
                                        <li class="link">
                                            <a href="injectables/MusicService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MusicService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlaylistModule.html" data-type="entity-link" >PlaylistModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PlaylistModule-419db92cdb99f0b32dbee4a405fd5be7b72830174f040ef863e7a6caa53ffedfcca5f09d0e62eed85222865102375b06ff65c681f9f572d6932cb6e8176e719a"' : 'data-target="#xs-controllers-links-module-PlaylistModule-419db92cdb99f0b32dbee4a405fd5be7b72830174f040ef863e7a6caa53ffedfcca5f09d0e62eed85222865102375b06ff65c681f9f572d6932cb6e8176e719a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PlaylistModule-419db92cdb99f0b32dbee4a405fd5be7b72830174f040ef863e7a6caa53ffedfcca5f09d0e62eed85222865102375b06ff65c681f9f572d6932cb6e8176e719a"' :
                                            'id="xs-controllers-links-module-PlaylistModule-419db92cdb99f0b32dbee4a405fd5be7b72830174f040ef863e7a6caa53ffedfcca5f09d0e62eed85222865102375b06ff65c681f9f572d6932cb6e8176e719a"' }>
                                            <li class="link">
                                                <a href="controllers/PlaylistController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaylistController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PlaylistModule-419db92cdb99f0b32dbee4a405fd5be7b72830174f040ef863e7a6caa53ffedfcca5f09d0e62eed85222865102375b06ff65c681f9f572d6932cb6e8176e719a"' : 'data-target="#xs-injectables-links-module-PlaylistModule-419db92cdb99f0b32dbee4a405fd5be7b72830174f040ef863e7a6caa53ffedfcca5f09d0e62eed85222865102375b06ff65c681f9f572d6932cb6e8176e719a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlaylistModule-419db92cdb99f0b32dbee4a405fd5be7b72830174f040ef863e7a6caa53ffedfcca5f09d0e62eed85222865102375b06ff65c681f9f572d6932cb6e8176e719a"' :
                                        'id="xs-injectables-links-module-PlaylistModule-419db92cdb99f0b32dbee4a405fd5be7b72830174f040ef863e7a6caa53ffedfcca5f09d0e62eed85222865102375b06ff65c681f9f572d6932cb6e8176e719a"' }>
                                        <li class="link">
                                            <a href="injectables/PlaylistService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaylistService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-5f95728e909de37fdb21dd0d69905b45e673047613531d5fdeb30801fcca5e75f4ac515c24df68f7227c680d826d9f3445a25049ab771128c992204006419a17"' : 'data-target="#xs-controllers-links-module-UserModule-5f95728e909de37fdb21dd0d69905b45e673047613531d5fdeb30801fcca5e75f4ac515c24df68f7227c680d826d9f3445a25049ab771128c992204006419a17"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-5f95728e909de37fdb21dd0d69905b45e673047613531d5fdeb30801fcca5e75f4ac515c24df68f7227c680d826d9f3445a25049ab771128c992204006419a17"' :
                                            'id="xs-controllers-links-module-UserModule-5f95728e909de37fdb21dd0d69905b45e673047613531d5fdeb30801fcca5e75f4ac515c24df68f7227c680d826d9f3445a25049ab771128c992204006419a17"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-5f95728e909de37fdb21dd0d69905b45e673047613531d5fdeb30801fcca5e75f4ac515c24df68f7227c680d826d9f3445a25049ab771128c992204006419a17"' : 'data-target="#xs-injectables-links-module-UserModule-5f95728e909de37fdb21dd0d69905b45e673047613531d5fdeb30801fcca5e75f4ac515c24df68f7227c680d826d9f3445a25049ab771128c992204006419a17"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-5f95728e909de37fdb21dd0d69905b45e673047613531d5fdeb30801fcca5e75f4ac515c24df68f7227c680d826d9f3445a25049ab771128c992204006419a17"' :
                                        'id="xs-injectables-links-module-UserModule-5f95728e909de37fdb21dd0d69905b45e673047613531d5fdeb30801fcca5e75f4ac515c24df68f7227c680d826d9f3445a25049ab771128c992204006419a17"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AlbumController.html" data-type="entity-link" >AlbumController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MusicController.html" data-type="entity-link" >MusicController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PlaylistController.html" data-type="entity-link" >PlaylistController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Album.html" data-type="entity-link" >Album</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlbumDTO.html" data-type="entity-link" >AlbumDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CryptographyService.html" data-type="entity-link" >CryptographyService</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailUtils.html" data-type="entity-link" >EmailUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileDTO.html" data-type="entity-link" >FileDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Music.html" data-type="entity-link" >Music</a>
                            </li>
                            <li class="link">
                                <a href="classes/MusicDTO.html" data-type="entity-link" >MusicDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Playlist.html" data-type="entity-link" >Playlist</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlaylistDTO.html" data-type="entity-link" >PlaylistDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/StandardError.html" data-type="entity-link" >StandardError</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link" >UserDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlbumService.html" data-type="entity-link" >AlbumService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthMiddleware.html" data-type="entity-link" >AuthMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link" >FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileUpload.html" data-type="entity-link" >FileUpload</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MusicService.html" data-type="entity-link" >MusicService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlaylistService.html" data-type="entity-link" >PlaylistService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/S3Service.html" data-type="entity-link" >S3Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ErrorProps.html" data-type="entity-link" >ErrorProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAlbum.html" data-type="entity-link" >IAlbum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuth.html" data-type="entity-link" >IAuth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthCredentials.html" data-type="entity-link" >IAuthCredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFile.html" data-type="entity-link" >IFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFileUploader.html" data-type="entity-link" >IFileUploader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMusic.html" data-type="entity-link" >IMusic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPlaylist.html" data-type="entity-link" >IPlaylist</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUploadedFile.html" data-type="entity-link" >IUploadedFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});