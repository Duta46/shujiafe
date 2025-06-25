export interface HomeService {
    id: number,
    price : number,
    duration: number,
    name: string,
    slug: string,
    is_popular: boolean,
    category: Category,
   thumbnail: string,
   benefits: Benefit[],
   testimonials: Testimonial[],
   about: string,
}


interface Benefit {
    id: number,
    name: string,
}

interface Testimonial {
    id: number,
    name: string,
    photo: string,
}

export interface Category {
    id: number,
    name: string,
    slug: string, 
    photo: string,
    home_services_count: number,
    home_services: HomeService[],
    popular_services: HomeService[],
}

export interface BookingDetails {
    id: number,
    name: string,
    phone:string,
    email: string,
    address: string,
    post_code: string,
    city: string,
    booking_trx_id: string,
    is_paid: boolean,
    sub_total: number,
    total_tax_amount: number,
    total_amount: number,
    started_time: string,
    scheduled_time: string,
    transaction_details: TransactionDetails[],
}

interface TransactionDetails {
    id: number,
    price: string,
    home_service_id: number,
    home_service: HomeService,
}

interface CartItem {
    service_id: number,
    slug: string,
    quantity: number,
}

type BookingFormData = {
    name: string,
    email: string,
    phone: string,
    started_time: string,
    scheduled_time: string,
    address: string,
    post_code: string,
    city: string,
};

