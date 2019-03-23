import Author from './author';
import '../../scss/custom.scss';
import 'bootstrap';
import 'jquery';
import 'jquery-validation';
import 'jquery-validation-unobtrusive';

var author = new Author("Kim JaeHyeok", 26);
author.write();