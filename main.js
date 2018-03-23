import Multiselect from './multiselect';
import Values from './search';

$(document).ready(function () {

    const multiselect = new Multiselect($('.js-multi-select'));
    multiselect.init();

    const values = new Values($('.js-search'));
    values.init();
});



