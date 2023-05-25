import { Component, OnInit } from '@angular/core';
import { ViewrequestService } from '../services/viewrequest.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  requestList: any = [];
  fetchDeviceData: any;
  http: any;
labelConstants: any;



  ngOnInit(): void {
    this.fetchDeviceData();
  }

  constructor(request: ViewrequestService) {

    request.viewRequests().subscribe((res) => {
      console.log(res);
      this.requestList = res;

    })



































    //   currentPosts:any=[
    //     {id:"1",
    //     startdate:"DD/MM/YY 00:00 (hr:min)",
    //     enddate:"DD/MM/YY 00:00 ",
    //     device:"iphoneXR",
    //     makemodel:"Apple iphone",
    //     request:"First name Last name",
    //     justification:"Project Requirement",
    //     status:"Approved",
    //     remark:"software update overdue"
    //   },
    //   {id:"2",
    //   startdate:"DD/MM/YY 00:00 ",
    //   enddate:"DD/MM/YY 00:00 ",
    //   device:"iphoneXR",
    //   makemodel:"Apple iphone",
    //   request:"First name Last name",
    //   justification:"Project Requirement",
    //   status:"Approved",
    //   remark:"software update overdue"
    // },
    // {id:"3",
    // startdate:"DD/MM/YY 00:00 ",
    // enddate:"DD/MM/YY 00:00 ",
    // device:"iphoneXR",
    // makemodel:"Apple iphone",
    // request:"First name Last name",
    // justification:"Project Requirement",
    // status:"Approved",
    // remark:"software update overdue"
    // },
    // {id:"4",
    // startdate:"DD/MM/YY 00:00 ",
    // enddate:"DD/MM/YY 00:00 ",
    // device:"iphoneXR",
    // makemodel:"Apple iphone",
    // request:"First name Last name",
    // justification:"Project Requirement",
    // status:"Approved",
    // remark:"software update overdue"
    // },
    // {id:"5",
    // startdate:"DD/MM/YY 00:00 ",
    // enddate:"DD/MM/YY 00:00 ",
    // device:"iphoneXR",
    // makemodel:"Apple iphone",
    // request:"First name Last name",
    // justification:"Project Requirement",
    // status:"Approved",
    // remark:"software update overdue"
    // },
    // {id:"6",
    // startdate:"DD/MM/YY 00:00 )",
    // enddate:"DD/MM/YY 00:00 ",
    // device:"iphoneXR",
    // makemodel:"Apple iphone",
    // request:"First name Last name",
    // justification:"Project Requirement",
    // status:"Approved",
    // remark:"software update overdue"
    // },
    // {id:"7",
    // startdate:"DD/MM/YY 00:00 ",
    // enddate:"DD/MM/YY 00:00 ",
    // device:"iphoneXR",
    // makemodel:"Apple iphone",
    // request:"First name Last name",
    // justification:"Project Requirement",
    // status:"Approved",
    // remark:"software update overdue"
    // },
    // {id:"8",
    // startdate:"DD/MM/YY 00:00 ",
    // enddate:"DD/MM/YY 00:00 ",
    // device:"iphoneXR",
    // makemodel:"Apple iphone",
    // request:"First name Last name",
    // justification:"Project Requirement",
    // status:"Approved",
    // remark:"software update overdue"
    // },
    // {id:"9",
    // startdate:"DD/MM/YY 00:00 ",
    // enddate:"DD/MM/YY 00:00 ",
    // device:"iphoneXR",
    // makemodel:"Apple iphone",
    // request:"First name Last name",
    // justification:"Project Requirement",
    // status:"Approved",
    // remark:"software update overdue"
    // },
    // {id:"10",
    // startdate:"DD/MM/YY 00:00 )",
    // enddate:"DD/MM/YY 00:00 ",
    // device:"iphoneXR",
    // makemodel:"Apple iphone",
    // request:"First name Last name",
    // justification:"Project Requirement",
    // status:"Approved",
    // remark:"software update overdue"
    // },


    //   ]
  }
 
  downloadCSV() {
    const url = 'your-api-endpoint'; // Replace with your API endpoint URL
alert("You want to download?");
    // Set the headers if required
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any additional headers if necessary
    });

    // Make the API call to download the CSV file
    this.http.get(url, { headers, responseType: 'blob' })
      .subscribe((response: Blob) => {
        // Save the file using FileSaver.js
        saveAs(response, 'filename.csv');
      }, (error: any) => {
        console.error('Error downloading the CSV file:', error);
      });
  }
}

function saveAs(response: Blob, arg1: string) {
  throw new Error('Function not implemented.');
}
