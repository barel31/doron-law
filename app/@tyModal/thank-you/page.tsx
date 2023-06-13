'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Modal from '@/components/Modal';
import Correct from '@/public/assets/correct.webp';

function TyModal() {
	const router = useRouter();

	return (
		<Modal>
			<Image src={Correct} alt="" className="m-auto" />
			<h1 className="text-3xl/10">תודה על פנייתך</h1>

			<h2 className="font-bold text-lime-500 text-lg">
				ההודעה נשלחה בהצלחה. אנו נחזור אליך בהקדם.
			</h2>

			<button
				type="button"
				className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 border border-neutral-700 rounded"
				onClick={() => router.back()}
			>
				סגור
			</button>
		</Modal>
	);
}

export default TyModal;
