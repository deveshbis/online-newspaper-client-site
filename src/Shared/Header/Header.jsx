import Logo from '../../assets/newspaper.png.jpg'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto h-20' src={Logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;