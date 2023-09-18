import Layout from 'components/Layout';
import '../assets/css/appGlobal.css'

const Global = () => {
    return (
        <div>
            <div className='border'>Header</div>
            <div className="text-red-500 flex">
                <div>
                    <div className='border h-screen'>Main content</div>
                    <div className='border h-screen'>second view</div>
                </div>

            </div>
        </div>
    )
}

export default Global;