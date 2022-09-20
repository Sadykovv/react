import Preloader from '../../common/Preloader/Preloader';
import profileinfocss from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    

    return <div>
        <img src='https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm ' />
        <div className={profileinfocss.content}>
           <img src={props.profile.photos.large} />
           ava+discription
        </div>

    </div>
}

export default ProfileInfo;