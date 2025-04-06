import { InfoIcon } from 'lucide-react';
import { createDocumentAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (

    <>

      <div className="float-left ml-8 mt-4">

      </div>

      {/* Main Page Content */}
      <div className="flex-1 w-full flex flex-col gap-12 p-8">
        <div className="w-full">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Date</th>
                  <th>Caption</th>
                  <th>Link</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td className=''>Ordinance No. 0006 Passed</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://scontent.ffab2-1.fna.fbcdn.net/v/t39.30808-6/481233705_122143473308448213_3857970799191416313_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wPn5jsrHHcIQ7kNvwFNFCGN&_nc_oc=AdnF5v9YU4MpU1aqZL-cm7rQ38fLXzkHAgfoWwH0FMGwZFu1IYsnIhq8X1Jheqa0yGE&_nc_zt=23&_nc_ht=scontent.ffab2-1.fna&_nc_gid=h7A6OTqhGXgYUa0qRa6F2w&oh=00_AYHMBTlzQ7pslMoAM0CWmsy5VmAg_GJDLXw7cgJ6v7zSgg&oe=67F49DC2"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </td>
                  <td>February 27, 2025</td>
                  <td className='truncate w-xs'>The College Legislative Council has passed Ordinance No.</td>
                  <td className='truncate max-w-3xs'>
                    <Link href="https://www.facebook.com/DLSUD.CICSSG/posts/pfbid02oG4o2BMrTcN4KoJGit9mP1geXZ48BZngpcbG3rRSsBPU9Rvtpwc4LyuZYva8HqHvl" className="btn w-full overflow-clip justify-start">https://www.facebook.com/DLSUD.CICSSG/posts/pfbid02oG4o2BMrTcN4KoJGit9mP1geXZ48BZngpcbG3rRSsBPU9Rvtpwc4LyuZYva8HqHvl</Link>
                  </td>
                  <td className='flex gap-2'>
                    <button className="btn btn-sm btn-primary">Edit</button>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* <div className='z-50 fixed top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center'>
            <div className="modal modal-open modal-bottom sm:modal-middle">
                <form className="modal-box flex flex-col gap-2">
                    <h1 className="text-2xl font-medium">Edit Document</h1>
                    <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                        <Label htmlFor="title">Title</Label>
                        <Input name="title" required />
                        <Label htmlFor="imagelink">Image Link</Label>
                        <Input name="imagelink" required/>
                        <Label htmlFor="dateposted">Date Posted</Label>
                        <Input type="date" name="dateposted" className='input'/>
                        <Label htmlFor="summary">Summary</Label>
                        <textarea name="summary" className="textarea w-full"></textarea>
                        <Label htmlFor="caption">Caption</Label>
                        <textarea name="caption" className="textarea w-full"></textarea>



                        <SubmitButton pendingText="Signing In..." formAction={createDocumentAction}>
                            Submit
                        </SubmitButton>
                        <FormMessage message={searchParams} />
                    </div>
                </form>
            </div>
        </div> */}

    </>

  )

}

