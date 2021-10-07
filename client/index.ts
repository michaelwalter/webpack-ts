// import 'skeleton-framework/dist/skeleton.min.css';
import './index.scss';
import Form from './components/form/form';
import CardsList from './components/cardsList/cards-list';
import PageName from './components/page-header/page-name';
import Logo from './components/page-header/logo';
import TitleBar from './components/page-header/title-bar';
import FormInfo from './components/form/form-info';

window.customElements.define('wp-page-name', PageName);
window.customElements.define('wp-logo', Logo);
window.customElements.define('wp-title-bar', TitleBar);
window.customElements.define('wp-form', Form);
window.customElements.define('wp-cards-list', CardsList);
window.customElements.define('wp-form-info', FormInfo);
