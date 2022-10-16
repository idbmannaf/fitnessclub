import Card from '../Ui/Card';
const Trainer = ({ id, image, name, job, socials }) => {
  return (
    <Card className='trainer'>
        <div className="trainer_img">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{job}</p>
            <div className="trainer_social">
                {
                    socials.map(({icon,link},index)=>{
                        return(
                            <a href={link} key={index} target="_blank" rel="noreferrer">{icon}</a>
                        )
                    })
                }
            </div>
        </div>

    </Card>
  )
}

export default Trainer