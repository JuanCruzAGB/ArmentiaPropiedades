<?php
    namespace App\Mail;

    use Illuminate\Bus\Queueable;
    use Illuminate\Contracts\Queue\ShouldQueue;
    use Illuminate\Mail\Mailable;
    use Illuminate\Queue\SerializesModels;

    class Contact extends Mailable{
        use Queueable, SerializesModels;

        /** @var array - The Contact data. */
        public $data;

        /**
         * * Create a new message instance.
         * @param mixed $formData - The form data.
         */
        public function __construct($formData){
            $this->data = $formData;
        }

        /**
         * * Build the message.
         * @return $this
         */
        public function build(){
            $email = $this->data->email;
            $name = $this->data->name;
            $subject = "Formulario web";
            return $this->view('mail.contact')
                ->from($email, $name)
                ->subject($subject);
        }
        
        /** @var array - Validation messages and rules. */
        public static $validation = [
            'rules' => [
                //
            ], 'messages' => [
                'en' => [
                    //
                ], 'es' => [
                    //
                ],
            ],
        ];
    }