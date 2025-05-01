declare namespace Portfolio {
    interface Project {
      title: string;
      description: string;
      image: string;
      link: string;
      technologies?: string[];
    }
  
    interface ContactForm {
      name: string;
      email: string;
      message: string;
    }
  }