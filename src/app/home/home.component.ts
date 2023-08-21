import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  jobtitle: string;
  department: string;
  project: Project;
}

export interface Project {
  name: string;
  id: number;
}

interface Device {
  Name: string;
  Serial_number: string;
  Assigned_to: string;
  Model: string;
  Managed_by: string;
  Status: string;
  Barcode: string;
  Class: string;
  Cost_center: string;
  Home_Location: string;
  Location: string;
  Owned_by: string;
  Created: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageSize = 10;
  page = 1;
  selectedKeyFilter = 'Home Location';
  keyFilter = [
    {
      id: 1,
      value: 'Admin lock',
    },
    {
      id: 2,
      value: 'Admin',
    },
    {
      id: 3,
      value: 'Home Location',
    },
  ];
  selectedCondition = 'contains';
  conditionList = [
    { id: 1, value: 'is' },
    { id: 2, value: 'is Not' },
    { id: 3, value: 'is anything' },
    { id: 4, value: 'is one of' },
    { id: 5, value: 'contains' },
  ];
  inputValue = '';
  sortKey: string = 'name';
  reverseSort: boolean = true;
  tableData: Device[];
  originalData: Device[];
  applyFilter() {
    debugger;
    let temp = this.tableData;
    // this.tableData= this.tableData.filter(o => {return (o.Home_Location == 'England' || o.name == 'Mark')})
    this.tableData = this.tableData.filter((item) => {
      /* for (let key in filter) {
        if (item[key] === undefine.inputValue filter[key])
          return false;
      } */
      if (
        this.selectedKeyFilter == 'Home Location' &&
        this.selectedCondition == 'contains'
      ) {
        if (item.Home_Location == this.inputValue) {
          return true;
        }
      }
    });
  }
  constructor(
    private service: SummaryService,
    private toastrService: ToastrService,
    private exportService: ExcelService,
    private exportService1: ExportService,
    private http: HttpClient
  ) {
    this.getJSON().subscribe((data) => {
      debugger;
      console.log(data);
      this.tableData = data;
      this.originalData = data;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get('/assets/data_list.json');
  }

  labwiseChartLoader: boolean = false;
  isFilterDropdown: boolean = false;
  ngOnInit() {
    this.labwiseChartLoader = true;
    this.dataSource = new MatTableDataSource(this.EmpData);
    this.dataSourceWithPageSize = new MatTableDataSource(this.EmpData);
  }
  /* search table */
  search = '';
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
    this.tableData = this.originalData;
  }

  downloadallocatedList() {
    this.exportService.exportAsExcelFile(this.tableData, 'INVENTORY LIST');
  }

  /* add & delete filter */
  public fieldArray: Array<any> = [{}];
  public newAttribute: any = {};

  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteFieldValue(index: any) {
    this.fieldArray.splice(index, 1);
  }

  /* mat table */
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'jobtitle',
    'department',
  ];

  EmpData: Employee[] = [
    {
      id: 1,
      firstname: 'Mellie',
      lastname: 'Gabbott',
      email: 'mgabbott0@indiatimes.com',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project1', id: 1 },
    },
    {
      id: 2,
      firstname: 'Yehudi',
      lastname: 'Ainsby',
      email: 'yainsby1@w3.org',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project2', id: 2 },
    },
    {
      id: 3,
      firstname: 'Noellyn',
      lastname: 'Primett',
      email: 'nprimett2@ning.com',
      gender: 'Female',
      department: 'Human Resources',
      jobtitle: 'Project Manager',
      project: { name: 'project3', id: 3 },
    },
    {
      id: 4,
      firstname: 'Stefanie',
      lastname: 'Yurenin',
      email: 'syurenin3@boston.com',
      gender: 'Female',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project4', id: 4 },
    },
    {
      id: 5,
      firstname: 'Stormi',
      lastname: "O'Lunny",
      email: 'solunny4@patch.com',
      gender: 'Female',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project5', id: 5 },
    },
    {
      id: 6,
      firstname: 'Keelia',
      lastname: 'Giraudy',
      email: 'kgiraudy5@nba.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project6', id: 6 },
    },
    {
      id: 7,
      firstname: 'Ikey',
      lastname: 'Laight',
      email: 'ilaight6@wiley.com',
      gender: 'Male',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project7', id: 7 },
    },
    {
      id: 8,
      firstname: 'Adrianna',
      lastname: 'Ruddom',
      email: 'aruddom7@seattletimes.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project8', id: 8 },
    },
    {
      id: 9,
      firstname: 'Dionysus',
      lastname: 'McCory',
      email: 'dmccory8@ox.ac.uk',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project9', id: 9 },
    },
    {
      id: 10,
      firstname: 'Claybourne',
      lastname: 'Shellard',
      email: 'cshellard9@rediff.com',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project10', id: 10 },
    },
  ];

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

  pageSizes = [3, 5, 7];
  dataSource: MatTableDataSource<Employee>;
  dataSourceWithPageSize: MatTableDataSource<Employee>;
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.EmpData);
    this.dataSourceWithPageSize = new MatTableDataSource(this.EmpData);
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }
}
