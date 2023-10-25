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
      name: "لوازم برقی",
      parentId: "",
      id: 1,
      children: []
    },
    {
      name: "اکسسوری",
      parentId: "",
      id: 2
      , children: []
    },
    {
      name: "جاروبرقی",
      parentId: 1,
      id: 5
      , children: []

    },
    {
      name: "یخچال",
      parentId: 1,
      id: 6
      , children: []

    },
    {
      name: "لوازم خودرو",
      parentId: "",
      id: 8
      , children: []

    },
    {
      name: "کف پوش",
      parentId: 8,
      id: 9
      , children: []

    },
    {
      name: "خوش بو کننده",
      parentId: 8,
      id: 10
      , children: []

    },
    {
      name: "لوازم مصرفی خودرو",
      parentId: 8,
      id: 11
      , children: []

    },
    {
      name: "روغن موتور",
      parentId: 11,
      id: 12
      , children: []

    },
    {
      name: "کفپوش 3D",
      parentId: 8,
      id: 13
      , children: []

    },
    {
      name: "روغن موتور SPEEDY",
      parentId: 12,
      id: 14
      , children: []
    },
    {
      name: "تست",
      parentId: 14,
      id: 17
      , children: []
    }
  ];

  treeArry: any[] = [];

  makeTree(ary: any)
  {
    for (let i = 0; i < ary.length; i++)
    {
      for (let y of ary)
      {
        if (ary[i].id == y.parentId)
        {
          ary[i].children.push(y);
        }
      }
    }
  }

}


