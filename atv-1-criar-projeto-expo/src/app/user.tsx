
export const user = {
  name: "Amandafralve",
  imageUrl: 'https://avatars.githubusercontent.com/u/160404693?v=4',
  imageSize: 90
};

export default function Profile(){
  return (
    <>
      <img src={user.imageUrl} alt={'Photo of' + user.name} 
        style={{width: user.imageSize,
                height: user.imageSize
        }}  
      />
    </>

  )
}