function icss(obj, attr, value){if(obj[0]){
        obj=obj[0];
    };
    if(arguments.length==2){
        if(attr=='scale'|| attr=='rotate'|| attr=='rotateX'||attr=='rotateY'||attr=='scaleX'||attr=='scaleY'||attr=='translateY'||attr=='translateX'||attr=='translateZ')
        {
            if(! obj.$Transform)
            {
                obj.$Transform={};
            }
            switch(attr)
            {
                case'scale':
                case'scaleX':
                case'scaleY':
                returntypeof(obj.$Transform[attr])=='number'?obj.$Transform[attr]:100;
                break;
                case'translateY':
                case'translateX':
                case'translateZ':
                return obj.$Transform[attr]?obj.$Transform[attr]:0;
                break;
                default:
                    return obj.$Transform[attr]?obj.$Transform[attr]:0;
            }
        }
        var sCur=obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr];
        if(attr=='opacity'){
            returnMath.round((parseFloat(sCur)*100));
        }
        else{
            returnparseInt(sCur);
        }
    }
    else if(arguments.length==3)
    {
        switch(attr){
            case'scale':
            case'scaleX':
            case'scaleY':
            case'rotate':
            case'rotateX':
            case'rotateY':
            case'translateY':
            case'translateX':
            case'translateZ':
            setCss3(obj, attr, value);
            break;
            case'width':
            case'height':
            case'paddingLeft':
            case'paddingTop':
            case'paddingRight':
            case'paddingBottom':
            value=Math.max(value,0);
            case'left':
            case'top':
            case'marginLeft':
            case'marginTop':
            case'marginRight':
            case'marginBottom':
                if(typeof value=="string")
                {
                    obj.style[attr]=value;
                }
                else
                {
                    obj.style[attr]=value+'px';
                }
                break;
            case'opacity':
                obj.style.filter="alpha(opacity:"+value+")";
                obj.style.opacity=value/100;
                break;
            default:
                obj.style[attr]=value;
        }
    }
}
function setCss3(obj, attr, value)
{var sTr="";
    var sVal="";
    var arr=["Webkit","Moz","O","ms",""];
    if(! obj["$Transform"])
    {
        obj["$Transform"]={};
    }
    obj["$Transform"][attr]=parseInt(value);
    for( sTr in obj["$Transform"])
    {
        switch(sTr)
        {
            case'scale':
            case'scaleX':
            case'scaleY':
            sVal+=sTr+"("+(obj["$Transform"][sTr]/100)+") ";   
            break;
            case'rotate':
            case'rotateX':
            case'rotateY':
            sVal+=sTr+"("+(obj["$Transform"][sTr])+"deg) ";    
            break;
            case'translateY':
            case'translateX':
            case'translateZ':
            sVal+=sTr+"("+(obj["$Transform"][sTr])+"px) ";
            break;
        }
    }
    for(var i=0;i<arr.length;i++)
    {
        obj.style[arr[i]+"Transform"]=sVal;
    }   
}