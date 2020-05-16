import React from 'react';
import ImageUI from '../../../components/Ui/ImageuI/ImageUi';
import HomeImage from '../../../assets/images/vote1.png' 
import Img1 from '../../../assets/images/vote2.jpeg' 
import Img2 from '../../../assets/images/vote3.png' 
import Img3 from '../../../assets/images/vote4.jpeg' 
import Aux from '../../../hoc/Auxillary';
import classes from './HomePage.module.css';
import Button from '../../../components/Ui/Button/Button';
import Slider from  '../../../components/Ui/Slider/Slider';
import Slidee from '../../../components/Ui/Slider/Slidee/Slidee';
import Shadow from '../../../components/Ui/Card/Shadow/Shadow';


const homepage = props => {
    const slidee =  (<span className="black-text">
                        djddcd udbhbbvidbvduiv dybfybd vdihvbdyhvb .
                    </span>);
    return (
        <Aux>
            <div className={classes.homepage} >
                <div className='container-fluid'>
                    <ImageUI width ='700' imagName={HomeImage}  />
                    {/* <div className='z-depth-5' >

                    </div> */}
                    <h3 className={classes.hometext} >Welcome to VClique!</h3>
                    <p className={classes.paragraphtext}>
                        edhejd chc jenkdckw ce j jwe chd cwkc dkcnwec wdcdkw cer cwdcwj cer we cwd ewcc
                        ejc djc wd cjc wecwdc jd vhefn kv uruewbvwec iuvuebvhf dvibef id fiu efu dihf efi 
                        djc dh cd h viuedv 
                    </p>
                    <div align='center' >
                        <Button btncolour='indigo' btnname='Get STarted'  iconname='directions_bike' whereto='/register' />
                    </div>
                    
                </div>
            </div>

            <Shadow shadowDir={Img1} >
                        djddcd udbhdwvdvh uvudvbuwdcuiwdvf cudbvywdbcuidbvicb iudbuidwbvuidwcbd ubuivbiud cdw]dvudwvnducndc
                        chdbvd vudvbdvi udbvidbvidbvduiv dybfybd vdihvbdyhvb .
            </Shadow>

        <div className={classes.tagspace} >
            <Slider>

                <Slidee slideeDir={Img1}
                slideeContent = {slidee}
                slideecaption = 'dhdhjcd cd cjd cjw cjw cwcw'
                 />
               <Slidee slideeDir={Img2}
                slideeContent = {slidee}
                slideecaption = 'dhdhjcd cd cjd cjw cjw cwcw'
                 />
                    <Slidee slideeDir={Img3}
                slideeContent = {slidee}
                slideecaption = 'dhdhjcd cd cjd cjw cjw cwcw'
                 />
            </Slider>
        </div>
  
        </Aux>
    );
}

export default homepage;