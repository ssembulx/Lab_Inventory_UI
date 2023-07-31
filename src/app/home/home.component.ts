import { AfterViewInit, Component, OnInit } from '@angular/core';
// amCharts imports
// import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Chart } from '@amcharts/amcharts5';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5percent from '@amcharts/amcharts5/percent';
import { SummaryService } from '../shared/service';
import { fitAngleToRange } from '@amcharts/amcharts5/.internal/core/util/Math';
import { left, right } from '@popperjs/core';

import * as am5plugins_exporting from '@amcharts/amcharts5/plugins/exporting';
import { ToastrService } from 'ngx-toastr';
import { is } from '@amcharts/amcharts4/core';
import { ExcelService } from '../shared/excel.service';
import { ExportService } from '../shared/export.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private service: SummaryService,
    private toastrService: ToastrService,
    private exportService: ExcelService,
    private exportService1: ExportService
  ) {}
  labwiseChartLoader: boolean = false;
  ngOnInit() {
    this.labwiseChartLoader = true;
  }
}
