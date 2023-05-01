import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:flex sm:min-h-screen sm:justify-between p-8 ">
      <div className="">
        <h1 className="sm:text-6xl font-bold sm:mb-8 text-3xl text-center">
          About Me
        </h1>
        <h1 className="text-m sm:text-2xl font-semibold mb-2 text-center">
          Software Engineer specializing in back end developement on AWS cloud
          with Python. Hands on experience on start-up company environment.
        </h1>
        <h1 className="sm:px-24 text-3xl mb-2 py-3 flex gap-10 flex-col text-center items-center sm:flex-row justify-between sm:space-x-20">
          <div>
            <h1 className="font-semibold">Programming Languages:</h1>
            <ul className="list-disc list-inside items-center flex flex-col space-y-4 py-4">
              <div className="flex space-x-2">
                <Image
                  src="/images/python-logo-only.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <h1>Python</h1>
              </div>
              <div className="flex space-x-2">
                <Image
                  src="/images/icons8-typescript-48.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <h1>Typescript</h1>
              </div>
              <div className="flex space-x-2">
                <Image
                  src="/images/icons8-java-50.png"
                  width={40}
                  height={30}
                  alt=""
                />
                <h1>Java</h1>
              </div>
              <div className="flex space-x-2">
                <Image
                  src="/images/icons8-c++-48.svg"
                  width={40}
                  height={30}
                  alt=""
                />
                <h1>C++</h1>
              </div>
              <div className="flex space-x-2">
                <Image
                  src="/images/icons8-bash.svg"
                  width={40}
                  height={30}
                  alt=""
                />
                <h1>Bash</h1>
              </div>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Cloud:</h1>
            <ul className="list-disc list-inside items-center flex flex-col space-y-4 py-4">
              <div className="flex space-x-2">
                <Image
                  src="/images/icons8-amazon-web-services.svg"
                  width={45}
                  height={40}
                  alt=""
                />
                <h1>AWS</h1>
              </div>
              <div className="flex space-x-2">
                <Image
                  src="/images/icons8-docker.svg"
                  width={45}
                  height={40}
                  alt=""
                />
                <h1>Docker</h1>
              </div>
              <div className="flex space-x-2">
                <Image src="/images/vercel.svg" width={50} height={40} alt="" />
                <h1>Vercel</h1>
              </div>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Frameworks:</h1>
            <ul className="list-disc list-inside items-center flex flex-col space-y-4 py-4">
              <div className="flex space-x-2">
                <Image
                  src="/images/icons8-flask.svg"
                  width={45}
                  height={40}
                  alt=""
                />
                <h1>Flask</h1>
              </div>
              <div className="flex space-x-2">
                <Image src="/images/next.svg" width={50} height={40} alt="" />
                <h1>NextJS 13</h1>
              </div>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Cloud Specific Technologies:</h1>
            <ul className="list-disc list-inside items-center flex flex-col space-y-4 py-4">
              <h1>AWS</h1>
              <div className="flex space-x-2">
                <Image src="/images/ec2.svg" width={40} height={40} alt="" />
                <h1>EC2</h1>
              </div>
              <div className="flex space-x-2">
                <Image src="/images/lambda.svg" width={40} height={40} alt="" />
                <h1>Lambda</h1>
              </div>
              <div className="flex space-x-2">
                <Image src="/images/s3.svg" width={40} height={40} alt="" />
                <h1>S3</h1>
              </div>
              <div className="flex space-x-2">
                <Image
                  src="/images/dynamodb.svg"
                  width={40}
                  height={40}
                  alt=""
                />
                <h1>DynamoDB</h1>
              </div>
              <div className="flex space-x-2">
                <Image src="/images/iam.svg" width={40} height={40} alt="" />
                <h1>IAM</h1>
              </div>
              <div className="flex space-x-2">
                <Image src="/images/api.svg" width={40} height={40} alt="" />
                <h1>API Gateway</h1>
              </div>
            </ul>
          </div>
        </h1>
      </div>
    </main>
  );
}
