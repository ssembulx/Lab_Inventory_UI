import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return (
        (val.Location__Name === null
          ? val.Location__Name
          : val.Location__Name.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.Team === null
          ? val.Team
          : val.Team.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.Program === null
          ? val.Program
          : val.Program.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.Sku === null
          ? val.Sku
          : val.Sku.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.Vendor === null
          ? val.Vendor
          : val.Vendor.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.AllocatedTo[0].Name === null
          ? val.AllocatedTo[0].Name
          : val.AllocatedTo[0].Name.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.FromWW === null
          ? val.FromWW
          : val.FromWW.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.ToWW === null
          ? val.ToWW
          : val.ToWW.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.BenchData === null
          ? val.BenchData
          : val.BenchData.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.Duration === null
          ? val.Duration
          : val.Duration.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase()))
      );
    });
  }
}

@Pipe({
  name: 'searchFilterLocation',
  pure: false,
})
export class SearchLab implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.Location__Name === null
        ? val.Location__Name
        : val.Location__Name.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterTeam',
  pure: false,
})
export class SearchTeam implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.Team === null
        ? val.Team
        : val.Team.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterProgram',
  pure: false,
})
export class SearchProgram implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.Program === null
        ? val.Program
        : val.Program.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterSku',
  pure: false,
})
export class SearchSku implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.Sku === null
        ? val.Sku
        : val.Sku.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterVendor',
  pure: false,
})
export class SearchVendor implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.Vendor === null
        ? val.Vendor
        : val.Vendor.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterAllocated',
  pure: false,
})
export class SearchAllocated implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.AllocatedTo[0].Name === null
        ? val.AllocatedTo[0].Name
        : val.AllocatedTo[0].Name.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterFromWW',
  pure: false,
})
export class SearchFromWW implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.FromWW === null
        ? val.FromWW
        : val.FromWW.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterToWW',
  pure: false,
})
export class SearchToWW implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.ToWW === null
        ? val.ToWW
        : val.ToWW.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterBench',
  pure: false,
})
export class SearchBench implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.BenchData === null
        ? val.BenchData
        : val.BenchData.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterDuration',
  pure: false,
})
export class SearchDuration implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.Duration === null
        ? val.Duration
        : val.Duration.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}
@Pipe({
  name: 'searchFilterApprovedBy',
  pure: false,
})
export class SearchApprovedBy implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.approvedBy === null
        ? val.approvedBy
        : val.approvedBy
            .toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterDetails',
  pure: false,
})
export class SearchBenchdetails implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.BenchData === null
        ? val.BenchData
        : val.BenchData.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'searchFilterFeedback',
  pure: false,
})
export class SearchPipeFeedback implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return (
        (val.suggestion_by[0].WWID === null
          ? val.suggestion_by[0].WWID
          : val.suggestion_by[0].WWID.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.suggestion_by[0].Name === null
          ? val.suggestion_by[0].Name
          : val.suggestion_by[0].Name.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.suggestion_by[0].Email === null
          ? val.suggestion_by[0].Email
          : val.suggestion_by[0].Email.toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase())) ||
        (val.created_date === null
          ? val.created_date
          : val.created_date
              .toString()
              .trim()
              .toLowerCase()
              .includes(args.toString().trim().toLowerCase()))
      );
    });
  }
}

@Pipe({
  name: 'nonsivSearchFilterLab',
  pure: false,
})
export class nonsivSearchLab implements PipeTransform {
  transform(value: any, args?: any): any {
    debugger;
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.location === null
        ? val.location
        : val.location
            .toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'nonsivSearchFilterLabDetails',
  pure: false,
})
export class nonsivSearchLabDetails implements PipeTransform {
  transform(value: any, args?: any): any {
    debugger;
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.lab === null
        ? val.lab
        : val.lab
            .toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'nonsivSearchFilterLabDetailsNo',
  pure: false,
})
export class nonsivSearchLabDetailsNo implements PipeTransform {
  transform(value: any, args?: any): any {
    debugger;
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.value === null
        ? val.value
        : val.value
            .toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase());
    });
  }
}

@Pipe({
  name: 'customerTableFilter',
})
export class SearchTablePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      return val.Name === null
        ? val.Name
        : val.Name?.toString()
            .trim()
            .toLowerCase()
            .includes(args.toString().trim().toLowerCase()) ||
            (val.Serial_number === null
              ? val.Serial_number
              : val.Serial_number?.toString()
                  .trim()
                  .toLowerCase()
                  .includes(args.toString().trim().toLowerCase())) ||
            (val.Assigned_to === null
              ? val.Assigned_to
              : val.Assigned_to?.toString()
                  .trim()
                  .toLowerCase()
                  .includes(args.toString().trim().toLowerCase())) ||
            (val.Model === null
              ? val.Model
              : val.Model?.toString()
                  .trim()
                  .toLowerCase()
                  .includes(args.toString().trim().toLowerCase())) ||
            (val.Managed_by === null
              ? val.Managed_by
              : val.Managed_by?.toString()
                  .trim()
                  .toLowerCase()
                  .includes(args.toString().trim().toLowerCase())) ||
            (val.Status === null
              ? val.Status
              : val.Status?.toString()
                  .trim()
                  .toLowerCase()
                  .includes(args.toString().trim().toLowerCase())) ||
            (val.Barcode === null
              ? val.Barcode
              : val.Barcode?.toString()
                  .trim()
                  .toLowerCase()
                  .includes(args.toString().trim().toLowerCase()));
    });
    /*  return value.filter((val: any) => {
      let rVal =
        val.Name.toLocaleLowerCase().includes(args) ||
        val.Serial_number.toLocaleLowerCase().includes(args) ||
        val.Assigned_to.toLocaleLowerCase().includes(args) ||
        val.Model.toLocaleLowerCase().includes(args) ||
        val.Managed_by.toLocaleLowerCase().includes(args) ||
        val.Status.toLocaleLowerCase().includes(args) ||
        val.Barcode.toLocaleLowerCase().includes(args) ||
        val.Class.toLocaleLowerCase().includes(args) ||
        val.Cost_center.toLocaleLowerCase().includes(args) ||
        val.Home_Location.toLocaleLowerCase().includes(args) ||
        val.Location.toLocaleLowerCase().includes(args) ||
        val.Owned_by.toLocaleLowerCase().includes(args) ||
        val.Created.toLocaleLowerCase().includes(args);
      return rVal;
    }); */
  }
}
