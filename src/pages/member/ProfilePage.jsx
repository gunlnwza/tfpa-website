import PageLayout from '../../components/layout/PageLayout'
import {
  ProfileHeader,
  PersonalSection,
  ContactSection,
  ProfessionalSection,
  WorkAddressSection,
  PostalAddressSection,
} from '../../features/profile/ProfileCard'

const PROFILE = {
  // Personal
  titleTH: 'นาย', firstNameTH: 'สมชาย', lastNameTH: 'วางแผนดี',
  titleEN: 'Mr.', firstNameEN: 'Somchai', lastNameEN: 'Wangplandee',
  gender: 'ชาย',
  dob: '15 มีนาคม 2528',
  nationalId: '1-2345-*****-**-3',
  // Contact
  email: 'somchai.wangplandee@example.com',
  mobile: '081-234-5678',
  // Professional
  qualifications: ['CFA', 'CPA'],
  sector: 'บริหารความมั่งคั่ง',
  // Work address
  companyName: 'ธนาคารกรุงเทพ จำกัด (มหาชน)',
  workAddress: '333 ถนนสีลม แขวงสีลม เขตบางรัก\nกรุงเทพมหานคร 10500',
  workPhone: '02-234-5678',
  // Postal address
  sameAsWork: false,
  postalAddress: '99/1 ซอยลาดพร้าว 15 แขวงจตุจักร เขตจตุจักร\nกรุงเทพมหานคร 10900',
  // Metadata
  memberId: 'CFP-2024-08421',
  memberSince: 'มิถุนายน 2567',
}

export default function ProfilePage() {
  return (
    <PageLayout loggedIn>
      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-4">
        <ProfileHeader profile={PROFILE} />
        <PersonalSection profile={PROFILE} />
        <ContactSection profile={PROFILE} />
        <ProfessionalSection profile={PROFILE} />
        <WorkAddressSection profile={PROFILE} />
        <PostalAddressSection profile={PROFILE} />
      </div>
    </PageLayout>
  )
}
