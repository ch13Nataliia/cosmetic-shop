import Head from 'next/head';
import Image from 'next/image';
// import { Inter } from 'next/font/google';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import ContactForm from '@/components/forms/ContacForm';
import { Button, DeleteIcon } from '@/components/mui/index';
import { sendEmail } from '@/lib/api-functions/client';

import Layout from '@/components/Layout';
// const inter = Inter({ subsets: ['latin'] });

export default function Contact() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading component="h2" variant="h3">
          Contact Us
        </Heading>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          quas quo voluptatum voluptatem vel reiciendis dolor necessitatibus
          nulla fuga quisquam ea, asperiores, earum eligendi? Nam dignissimos
          maxime voluptatem dolor nostrum.
        </Paragraph>
        <ContactForm submitHandler={sendEmail}/>
      </Layout>
    </>
  );
}
