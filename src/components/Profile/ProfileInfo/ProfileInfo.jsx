import profileinfocss from './ProfileInfo.module.css'

const ProfileInfo = () => {

    return <div>
        <img src='https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm ' />
        <div className={profileinfocss.content}>
           <a> ava+discription</a>
        </div>

    </div>
}

export default ProfileInfo;