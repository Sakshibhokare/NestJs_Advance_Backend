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
                    <a href="index.html" data-type="index-link">nest_js_intro documentation</a>
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
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-3fe0b109294906290c6783e826026d169fb81363af93eae5a4f8dac4f8336414d6035d8b821dd9af3c10e62c6370eb334f16e6affc302c838e11e49225cb310b"' : 'data-bs-target="#xs-controllers-links-module-AppModule-3fe0b109294906290c6783e826026d169fb81363af93eae5a4f8dac4f8336414d6035d8b821dd9af3c10e62c6370eb334f16e6affc302c838e11e49225cb310b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3fe0b109294906290c6783e826026d169fb81363af93eae5a4f8dac4f8336414d6035d8b821dd9af3c10e62c6370eb334f16e6affc302c838e11e49225cb310b"' :
                                            'id="xs-controllers-links-module-AppModule-3fe0b109294906290c6783e826026d169fb81363af93eae5a4f8dac4f8336414d6035d8b821dd9af3c10e62c6370eb334f16e6affc302c838e11e49225cb310b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-3fe0b109294906290c6783e826026d169fb81363af93eae5a4f8dac4f8336414d6035d8b821dd9af3c10e62c6370eb334f16e6affc302c838e11e49225cb310b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-3fe0b109294906290c6783e826026d169fb81363af93eae5a4f8dac4f8336414d6035d8b821dd9af3c10e62c6370eb334f16e6affc302c838e11e49225cb310b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3fe0b109294906290c6783e826026d169fb81363af93eae5a4f8dac4f8336414d6035d8b821dd9af3c10e62c6370eb334f16e6affc302c838e11e49225cb310b"' :
                                        'id="xs-injectables-links-module-AppModule-3fe0b109294906290c6783e826026d169fb81363af93eae5a4f8dac4f8336414d6035d8b821dd9af3c10e62c6370eb334f16e6affc302c838e11e49225cb310b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c742ffe85722ea7c143f5f8a679d225ad6945848ff7d15e793af0db9b310fe6c52989c563307a683fa2ab36eecab699dbe581fadfe7eecce213c99b3a8ec3fa2"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c742ffe85722ea7c143f5f8a679d225ad6945848ff7d15e793af0db9b310fe6c52989c563307a683fa2ab36eecab699dbe581fadfe7eecce213c99b3a8ec3fa2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c742ffe85722ea7c143f5f8a679d225ad6945848ff7d15e793af0db9b310fe6c52989c563307a683fa2ab36eecab699dbe581fadfe7eecce213c99b3a8ec3fa2"' :
                                            'id="xs-controllers-links-module-AuthModule-c742ffe85722ea7c143f5f8a679d225ad6945848ff7d15e793af0db9b310fe6c52989c563307a683fa2ab36eecab699dbe581fadfe7eecce213c99b3a8ec3fa2"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c742ffe85722ea7c143f5f8a679d225ad6945848ff7d15e793af0db9b310fe6c52989c563307a683fa2ab36eecab699dbe581fadfe7eecce213c99b3a8ec3fa2"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c742ffe85722ea7c143f5f8a679d225ad6945848ff7d15e793af0db9b310fe6c52989c563307a683fa2ab36eecab699dbe581fadfe7eecce213c99b3a8ec3fa2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c742ffe85722ea7c143f5f8a679d225ad6945848ff7d15e793af0db9b310fe6c52989c563307a683fa2ab36eecab699dbe581fadfe7eecce213c99b3a8ec3fa2"' :
                                        'id="xs-injectables-links-module-AuthModule-c742ffe85722ea7c143f5f8a679d225ad6945848ff7d15e793af0db9b310fe6c52989c563307a683fa2ab36eecab699dbe581fadfe7eecce213c99b3a8ec3fa2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-4e3c5bea81cee0897af4b63ce552cc3be6693a3c93370a60f9c062dafe60070cc2d12fe41f9083db84dbe9690aafe1c9840095864f69ae4f23cba85a47c19997"' : 'data-bs-target="#xs-controllers-links-module-PostModule-4e3c5bea81cee0897af4b63ce552cc3be6693a3c93370a60f9c062dafe60070cc2d12fe41f9083db84dbe9690aafe1c9840095864f69ae4f23cba85a47c19997"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-4e3c5bea81cee0897af4b63ce552cc3be6693a3c93370a60f9c062dafe60070cc2d12fe41f9083db84dbe9690aafe1c9840095864f69ae4f23cba85a47c19997"' :
                                            'id="xs-controllers-links-module-PostModule-4e3c5bea81cee0897af4b63ce552cc3be6693a3c93370a60f9c062dafe60070cc2d12fe41f9083db84dbe9690aafe1c9840095864f69ae4f23cba85a47c19997"' }>
                                            <li class="link">
                                                <a href="controllers/postController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >postController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-4e3c5bea81cee0897af4b63ce552cc3be6693a3c93370a60f9c062dafe60070cc2d12fe41f9083db84dbe9690aafe1c9840095864f69ae4f23cba85a47c19997"' : 'data-bs-target="#xs-injectables-links-module-PostModule-4e3c5bea81cee0897af4b63ce552cc3be6693a3c93370a60f9c062dafe60070cc2d12fe41f9083db84dbe9690aafe1c9840095864f69ae4f23cba85a47c19997"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-4e3c5bea81cee0897af4b63ce552cc3be6693a3c93370a60f9c062dafe60070cc2d12fe41f9083db84dbe9690aafe1c9840095864f69ae4f23cba85a47c19997"' :
                                        'id="xs-injectables-links-module-PostModule-4e3c5bea81cee0897af4b63ce552cc3be6693a3c93370a60f9c062dafe60070cc2d12fe41f9083db84dbe9690aafe1c9840095864f69ae4f23cba85a47c19997"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-b2f4b3d8ce26e214239fc1416ff813e53c4ecea3ec789567adbae02785ec029b5f52e02d00bf2dcc86685991eedd938c1c72398b69264798d35c9e527429ee8b"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-b2f4b3d8ce26e214239fc1416ff813e53c4ecea3ec789567adbae02785ec029b5f52e02d00bf2dcc86685991eedd938c1c72398b69264798d35c9e527429ee8b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-b2f4b3d8ce26e214239fc1416ff813e53c4ecea3ec789567adbae02785ec029b5f52e02d00bf2dcc86685991eedd938c1c72398b69264798d35c9e527429ee8b"' :
                                            'id="xs-controllers-links-module-UsersModule-b2f4b3d8ce26e214239fc1416ff813e53c4ecea3ec789567adbae02785ec029b5f52e02d00bf2dcc86685991eedd938c1c72398b69264798d35c9e527429ee8b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/postController.html" data-type="entity-link" >postController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});