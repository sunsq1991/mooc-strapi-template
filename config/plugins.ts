export default ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: 'ca-central-1',
          params: {
            ACL: env('AWS_ACL', 'public-read'), // 'private' if you want to make the uploaded files private
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
    },
    email: {
        config: {
          provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: 'it@moocads.com',
            defaultReplyTo: 'it@moocads.com',
            testAddress: 'it@moocads.com',
          },
        },
      },
  });