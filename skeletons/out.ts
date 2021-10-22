import { Skeleton } from '@core/skeleton';
import { stringBone } from '@core/bones/stringbone';
import { fileBone } from '@core/bones/fileBone';
import { numericBone } from '@core/bones/numericBone';
export class  OutSkel extends Skeleton
{
    kindname="out";
    testNumBone: numericBone;
    constructor()
    {
        super();
        this.testNumBone=new numericBone({descr:"das ist ein Bone descr"});
    }
}
