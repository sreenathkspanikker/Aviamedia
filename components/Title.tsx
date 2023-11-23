import GSAPAnimatedText from '@/components/animation/GSAPAnimatedText';

const Title = ({ title, subTitle }: any) => {

    return (
        <div className='page-title'>
            <GSAPAnimatedText type="div" >
                <h2>{title}</h2>
            </GSAPAnimatedText>
            <GSAPAnimatedText type="div" directionY={30}>
                <p>{subTitle}</p>
            </GSAPAnimatedText>
        </div>
    )
}

export default Title