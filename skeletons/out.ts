import { Skeleton } from '../exnode-core/skeleton';
import { stringBone } from '../exnode-core/bones/stringbone';
import { fileBone } from '../exnode-core/bones/fileBone';
export class  OutSkel extends Skeleton
{
    kindname="out";
    testString: stringBone;
    testfileout: fileBone;
    constructor()
    {
        super();
        this.testString=new stringBone();
        this.testfileout=new fileBone();
    }
}
