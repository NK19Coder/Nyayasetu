import { formatDate } from '../../utils/formatDate';

const LawyerAbout = () => {
  return <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Ram JethMalani</span>
            </h3>
            <p className="text__para">Ram JethMalani is a seasoned attorney with a passion for justice and a track record of success. With a focus on Civil Rights , Ram JethMalani has been dedicated to helping individuals and businesses navigate complex legal matters.</p>
        </div>

        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate('12-04-2010')} - {formatDate('09-13-2016')}</span>
                        <p className='text-[15px] leading-6 font-medium text-textColor'>Degree</p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'> National Academy of Legal Studies and Research , Hyderabad</p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate('08-23-2006')} - {formatDate('09-13-2010')}</span>
                        <p className='text-[15px] leading-6 font-medium text-textColor'>Degree</p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>National Academy of Legal Studies and Research , Hyderabad</p>
                </li>
            </ul>
        </div>

        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>

            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formatDate('08-23-2006')} - {formatDate('09-13-2010')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Advocate</p>

                    <p className='text-[15px] leading-6 font-medium text-textColor'>Rohini Court</p>
                </li>

                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formatDate('08-23-2006')} - {formatDate('09-13-2010')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Advocate</p>

                    <p className='text-[15px] leading-6 font-medium text-textColor'>Rohini Court</p>
                </li>
            </ul>

        </div>

    </div>
}

export default LawyerAbout;
