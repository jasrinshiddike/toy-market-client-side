import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PhotoGalary = () => {
    useEffect(() => {
        AOS.init({
          duration: 800, // Specify the animation duration (in milliseconds)
          offset: 200, // Specify the offset (in pixels) before the element appears
        });
      }, []);
    
      useEffect(() => {
        AOS.refresh();
      });
    const photos = [
        'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        'https://images.pexels.com/photos/5799381/pexels-photo-5799381.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        'https://images.pexels.com/photos/2065641/pexels-photo-2065641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/386010/pexels-photo-386010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/54278/pexels-photo-54278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/211650/pexels-photo-211650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // Add more photo URLs as needed
      ];
    return (
        <div data-aos="fade-up" data-aos-delay="200">
            <div className="container mx-auto bg-slate-100 mt-6 rounded-2xl">
            <h3 className="text-5xl mb-3 text-center mt-6 pt-3">Photo Gallery of Toys</h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-64 p-6"
                />
                ))}
            </div>
        </div>
        </div>
    );
};

export default PhotoGalary;