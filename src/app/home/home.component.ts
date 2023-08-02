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
  pageSize = 10;
  page = 1;
  tableData = [
    {
      name: 's/n FZBS327000DA',
      asset: '',
      etag: '',
      assigned: '2021-07-23 17:33:41',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n BC00000797038',
      asset: '',
      etag: '',
      assigned: '2020-09-09 23:28:36',
      assignedto: '11620094 - RAMACHANDRAN, RAGINI',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n 4750W8I0000054',
      asset: '',
      etag: '',
      assigned: '2020-09-11 01:41:37',
      assignedto: '11607667 - PRASAD MUDURU, REDDY',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n D0KE221100229',
      asset: '',
      etag: '',
      assigned: '	2020-09-11 01:41:41',
      assignedto: '11410799 - BALAKRISHNAN, ALBIN',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n EA-550PSN171200116',
      asset: '',
      etag: '',
      assigned: '	2020-09-09 23:28:31',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n NVD18QW230050',
      asset: '',
      etag: '',
      assigned: '2020-09-09 23:28:32',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n NVD18QW230028',
      asset: '',
      etag: '',
      assigned: '2020-09-11 01:41:40',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n NVD18QW230055',
      asset: '',
      etag: '',
      assigned: '2021-07-23 17:28:04',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n NVD18QW230074',
      asset: '',
      etag: '',
      assigned: '	2021-07-23 17:34:31',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n NVD18QW230038',
      asset: '',
      etag: '',
      assigned: '	2020-09-11 01:41:39',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n D0KE221100229',
      asset: '',
      etag: '',
      assigned: '	2020-09-11 01:41:41',
      assignedto: '11410799 - BALAKRISHNAN, ALBIN',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n EA-550PSN171200116',
      asset: '',
      etag: '',
      assigned: '	2020-09-09 23:28:31',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n NVD18QW230050',
      asset: '',
      etag: '',
      assigned: '2020-09-09 23:28:32',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n D0KE221100229',
      asset: '',
      etag: '',
      assigned: '	2020-09-11 01:41:41',
      assignedto: '11410799 - BALAKRISHNAN, ALBIN',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n EA-550PSN171200116',
      asset: '',
      etag: '',
      assigned: '	2020-09-09 23:28:31',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n NVD18QW230050',
      asset: '',
      etag: '',
      assigned: '2020-09-09 23:28:32',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n D0KE221100229',
      asset: '',
      etag: '',
      assigned: '	2020-09-11 01:41:41',
      assignedto: '11410799 - BALAKRISHNAN, ALBIN',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n EA-550PSN171200116',
      asset: '',
      etag: '',
      assigned: '	2020-09-09 23:28:31',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
    {
      name: 's/n NVD18QW230050',
      asset: '',
      etag: '',
      assigned: '2020-09-09 23:28:32',
      assignedto: '11521242 - SULANAYAKANAHALLI RAMRAO, MURALIDHAR',
      changeGroup: '',
      value: '',
    },
  ];
  keyFilter = [
    {
      category: 'Admin lock',
      subCategory: [
        { value: 'is' },
        { value: 'is Not' },
        { value: 'is anything' },
        { value: 'is one of' },
      ],
    },
    {
      category: 'Admin',
      subCategory: [
        { value: 'is' },
        { value: 'is Not' },
        { value: 'is anything' },
        { value: 'is one of' },
      ],
    },
    {
      category: 'Admin lock',
      subCategory: [
        { value: 'is' },
        { value: 'is Not' },
        { value: 'is anything' },
        { value: 'is one of' },
      ],
    },
    {
      category: 'Admin',
      subCategory: [
        { value: 'is' },
        { value: 'is Not' },
        { value: 'is anything' },
        { value: 'is one of' },
      ],
    },
    {
      category: 'Admin lock',
      subCategory: [
        { value: 'is' },
        { value: 'is Not' },
        { value: 'is anything' },
        { value: 'is one of' },
      ],
    },
  ];
  sortKey: string = 'name';
  reverseSort: boolean = true;
  constructor(
    private service: SummaryService,
    private toastrService: ToastrService,
    private exportService: ExcelService,
    private exportService1: ExportService
  ) {}
  labwiseChartLoader: boolean = false;
  isFilterDropdown: boolean = false;
  ngOnInit() {
    this.labwiseChartLoader = true;
  }
  /** Table sorting */
  sortTable(key: string, data: any) {
    if (this.sortKey === key) {
      this.reverseSort = !this.reverseSort;
    } else {
      this.sortKey = key;
      this.reverseSort = false;
    }
    // Sort the table data based on the sortKey and reverseSort
    data.sort((a: any, b: any) => {
      const valueA = a[this.sortKey];
      const valueB = b[this.sortKey];
      if (valueA && valueB) {
        // Compare values based on data types
        if (typeof valueA === 'string' && typeof valueB === 'string') {
          // Check if both values are valid decimal numbers
          if (valueA.includes('%') || valueB.includes('%')) {
            const getPercentageValue = (value: string) => {
              const match = value.match(/([\d.]+)%/);
              return match ? parseFloat(match[1]) : 0;
            };
            const percentageA = getPercentageValue(valueA);
            const percentageB = getPercentageValue(valueB);
            return this.reverseSort
              ? percentageB - percentageA
              : percentageA - percentageB;
          } else {
            const isDecimalA = /^\d+(\.\d+)?$/.test(valueA);
            const isDecimalB = /^\d+(\.\d+)?$/.test(valueB);
            if (isDecimalA && isDecimalB) {
              // Compare as decimal numbers
              return this.reverseSort
                ? parseFloat(valueB) - parseFloat(valueA)
                : parseFloat(valueA) - parseFloat(valueB);
            } else {
              // Compare as strings
              return this.reverseSort
                ? valueB.localeCompare(valueA)
                : valueA.localeCompare(valueB);
            }
          }
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
          return this.reverseSort ? valueB - valueA : valueA - valueB;
        } else {
          // If data types are different or not handled explicitly, compare as strings
          const stringA = String(valueA);
          const stringB = String(valueB);
          return this.reverseSort
            ? stringB.localeCompare(stringA)
            : stringA.localeCompare(stringB);
        }
      } else {
        const valueA = a[this.sortKey];
        const valueB = b[this.sortKey];
        // Compare values based on data types
        if (typeof valueA === 'string' && typeof valueB === 'string') {
          // Check if both values are valid decimal numbers
          const isDecimalA = /^\d+(\.\d+)?$/.test(valueA);
          const isDecimalB = /^\d+(\.\d+)?$/.test(valueB);

          if (isDecimalA && isDecimalB) {
            // Compare as decimal numbers
            return this.reverseSort
              ? parseFloat(valueB) - parseFloat(valueA)
              : parseFloat(valueA) - parseFloat(valueB);
          } else {
            // Compare as strings
            return this.reverseSort
              ? valueB.localeCompare(valueA)
              : valueA.localeCompare(valueB);
          }
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
          return this.reverseSort ? valueB - valueA : valueA - valueB;
        } else {
          // If data types are different or not handled explicitly, compare as strings
          const stringA = String(valueA);
          const stringB = String(valueB);
          return this.reverseSort
            ? stringB.localeCompare(stringA)
            : stringA.localeCompare(stringB);
        }
      }
    });
  }
  /** dropdown filter enable/disable */
  enableFilters() {
    this.isFilterDropdown = !this.isFilterDropdown;
  }
}
