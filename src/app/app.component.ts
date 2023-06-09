import { ngModuleJitUrl } from '@angular/compiler';
import { Component, AfterViewInit } from '@angular/core';
import jQuery from 'jQuery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-app';

  ngAfterViewInit() {
    (function ($) {
      "use strict";
      var path = window.location.href;
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
        if (this.href === path) {
          $(this).addClass("active");
        }
      });      
      $("#sidebarToggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}