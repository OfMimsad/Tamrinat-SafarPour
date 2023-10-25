import {Component, OnInit, ChangeDetectorRef, AfterContentChecked} from '@angular/core';

import {MatMenu} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'dynamicNestedMenu';
  newArray: any = [];
  constructor(private changeDetector: ChangeDetectorRef) {}
  ngOnInit()
  {
    // // this.pushChildren();
    // this.rawParentIDS = this.getRawParentID();
    // console.log(this.rawArray);
    // this.returnParent(this.rawArray);
    // console.log(this.childArr);
    // // console.log(this.parentArr);
    // this.makeChildOutOfParent();
    // console.log(this.childWithKids);
    // this.makeChild(this.parentArr, this.childArr);
    // console.log(this.finalArr);
    // this.makeChild(this.childWithKids, this.childArr);
    // console.log(this.finalArr);
    // // this.childtemp = this.childWithKids.reduce((val, i) =>
    // // {

    // // });
    // // console.log(this.childtemp);
    // // console.log(this.rawArray);
    // // console.log(this.theKids);
    // // console.log(this.parentArr);
    // // this.makeChild(this.parentArr, this.childArr);
    // // console.log(this.finalArr);


    // this.newArray = this.finalArr.reduce((acc: any, curr: any) =>
    // {
    //   const existingObject = acc.find((obj: any) => obj.name === curr.name);
    //   if (existingObject)
    //   {
    //     existingObject.children.push(...curr.children);
    //   } else
    //   {
    //     acc.push(curr);
    //   }
    //   return acc;
    // }, []);

    // // console.log(this.newArray);
    // // this.treeTest = this.convertToTree(this.newArray);
    // // console.log(this.treeTest);
    // this.makeTree();



    this.makeTree(this.rawArray);
    console.log(this.rawArray);
  }



  ngAfterContentChecked(): void
  {
    this.changeDetector.detectChanges();
  }

  // navItem: IdataType[] = [
  //   {
  //     id: 1,
  //     name: "Pedar",
  //     children: [
  //       {
  //         id: 2,
  //         name: "Pesar",
  //         children: [
  //           {
  //             name: "nave_pesar",
  //             children: [{
  //               name: "Akbar Akbari",
  //               children: [{
  //                 name: "Kambiz Dirbaz"
  //               }]
  //             }]
  //           }
  //         ]
  //       },
  //       {
  //         id: 3,
  //         name: "Dokhtar",
  //         children: [
  //           {
  //             id: 4,
  //             name: "Nave1",
  //           },
  //           {
  //             id: 5,
  //             name: "Nave2",
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];





  // parentArr: any = [];
  // childArr: any = [];
  // pushChildren()
  // {
  //   for (let item of this.rawArray)
  //   {
  //     item["children"] = [];
  //     // item.chldren.push = [];
  //   }
  // }

  // returnParent(arry: any[])
  // {
  //   for (let i = 0; i < arry.length; i++)
  //   {

  //     if (arry[i].parentId == '')
  //     {
  //       this.parentArr.push(arry[i]);
  //     }
  //     else
  //     {
  //       this.childArr.push(arry[i]);
  //     }
  //   }
  // }

  // childWithKids: any[] = [];
  // theKids: any[] = [];
  // rawParentIDS: any[] = [];
  // getRawParentID()
  // {
  //   let tempArr = [];
  //   for (let id of this.rawArray)
  //   {
  //     tempArr.push(id.parentId);
  //   }
  //   return tempArr;
  // }


  // makeChildOutOfParent()
  // {

  //   this, this.childArr.forEach((elemen: any, i: any) =>
  //   {
  //     for (let i = 0; i < this.rawParentIDS.length; i++)
  //       if (elemen.id == this.rawParentIDS[i])
  //       {
  //         this.childWithKids.push(elemen);
  //       }
  //   });
  // }
  // childtemp: any[] = [];


  // makeChildsforChildrene()
  // {
  //   for (let par of this.childWithKids)
  //   {

  //   }
  // }
  // finalArr: any = [];
  // // finalTree: any = [];
  // makeChild(parents: any[], children: any[])
  // {

  //   for (let parent of parents)
  //   {
  //     for (let child of children) 
  //     {
  //       if (parent.id == child.parentId)
  //       {
  //         let x =
  //         {
  //           name: parent.name,
  //           id: parent.id,
  //           parentId: parent?.parentId,
  //           children: [{
  //             name: child.name,
  //             id: child.id,
  //             parentId: child.parentId
  //           }]
  //         };

  //         this.finalArr.push(x);
  //       }
  //     }
  //   }

  // }

  rawArray: any = [


    {
      name: "چهارمین پدر",
      parentId: "",
      id: 4
      , children: []

    },
    {
      name: "سومین پدر",
      parentId: "",
      id: 3
      , children: []

    },
    {
      name: "دومین پدر",
      parentId: "",
      id: 2
      , children: []
    },
    {
      name: "اولین پدر",
      parentId: "",
      id: 1,
      children: []
    },

    {
      name: "بچه اول پدر اول",
      parentId: 1,
      id: 5
      , children: []

    },
    {
      name: "بچه دوم پدر اول",
      parentId: 1,
      id: 6
      , children: []

    },
    {
      name: "نوه اول بچه دوم پدر اول",
      parentId: 6,
      id: 7
      , children: []

    },
    {
      name: "نتیجه اول پدر اول",
      parentId: 7,
      id: 8
      , children: []
    },
    {
      name: "نتیجه دوم پدر اول",
      parentId: 7,
      id: 9
      , children: []

    },
    {
      name: "بچه اول پدر دوم",
      parentId: 2,
      id: 11
      , children: []
    },
    {
      name: "بچه دوم پدر دوم",
      parentId: 2,
      id: 12
      , children: []
    },
    {
      name: "نوه اول پدر دوم از پسر اول",
      parentId: 11,
      id: 13
      , children: []
    },
    {
      name: "نوه دوم پدر دوم از پسر دوم",
      parentId: 11,
      id: 14
      , children: []
    }, {
      name: "نتیجه اول از پسر دوم"
      , parentId: 14
      , id: 15
      , children: []
    }
    ,
    {
      name: "ندیده اول پسر نتیجه اول",
      parentId: 15,
      id: 16
      , children: []
    }, {
      name: "ندیده دوم پسر نتیجه اول",
      parentId: 15,
      id: 17
      , children: []
    }, {
      name: "ندیده سوم پسر نتیجه اول",
      parentId: 15,
      id: 18
      , children: []
    }, {
      name: "پسر اول ندیده در دوم",
      parentId: 17,
      id: 19
      , children: []
    }
    , {
      name: "پسر اول پدر چهارم",
      parentId: 4,
      id: 20
      , children: []
    }
  ];

  treeArry: any[] = [];

  makeTree(ary: any)
  {
    for (let x of ary)
    {
      for (let y of ary)
      {
        if (x.id == y.parentId)
        {
          x.children.push(y);
        }
      }
    }
  }

}


