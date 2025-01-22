import { MdSearch } from 'react-icons/md'
import { CgPlayListSearch } from 'react-icons/cg'

const SearchBar = () => (
	<div className="w-full rounded border bg-customBlack-100 p-2 flex items-center transition duration-200 dark:bg-customBlack-700 dark:border-customBlack-500 dark:hover:bg-[rgba(100,100,100,1)] hover:bg-customWhite-300">
		<MdSearch className="text-xl cursor-pointer" />
		<input
			type="text"
			placeholder="Send Message"
			minLength={5}
			required
			className="bg-transparent outline-none px-2 flex-1 text-base"
		/>
		<CgPlayListSearch className="text-xl cursor-pointer" />
	</div>
)

export default SearchBar
