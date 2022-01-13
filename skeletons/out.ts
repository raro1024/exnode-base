import { RefSkeleton, Skeleton } from '@core/skeleton';
import { stringBone } from '@core/bones/stringbone';
import { fileBone } from '@core/bones/fileBone';
import { numericBone } from '@core/bones/numericBone';
import { selectBone } from '@core/bones/selectBone';
import { passswordBone } from '@core/bones/passwordBone';
import { recordBone } from '@core/bones/recordBone';
class REFOUT extends RefSkeleton {
    testNumBone: numericBone;
    testRecordBone: recordBone;
    constructor() {
        super();
        this.testNumBone=new numericBone({descr:"das ist ein numericBone in ref"});
        this.testRecordBone=new recordBone({descr:"das ist ein Record Bone",parent:this,using:REFOUT2});
    }
}
class REFOUT2 extends RefSkeleton {
    testNumBone: numericBone;
    testRecordBone: recordBone;
    constructor() {
        super();
        this.testNumBone=new numericBone({descr:"das ist ein numericBone in ref"});
        
    }
}
export class  OutSkel extends Skeleton
{
    kindname="out";
    testNumBone: numericBone;
    testStringBone: stringBone;
    testSelectBone: selectBone;
    testPasswordBone: passswordBone;
    testRecordBone: recordBone;
    constructor()
    {
        super();
        //this.testNumBone=new numericBone({descr:"das ist ein Bone N"});
        this.testStringBone=new stringBone({descr:"das ist ein Bone S"});
        //this.testSelectBone=new selectBone({descr:"das ist ein Bone SELE",options:{"a":1,"b":2,"c":3}});
        //this.testPasswordBone=new passswordBone({descr:"das ist ein Bone Password"});
        //this.testRecordBone=new recordBone({descr:"das ist ein Record Bone",parent:this,using:REFOUT});
    }
}
