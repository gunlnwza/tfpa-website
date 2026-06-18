import PageLayout from '../../../components/layout/PageLayout'
import MainContainer from '../../../components/layout/MainContainer'
import Divider from '../../../components/ui/Divider'
import CredentialPath from '../../../features/credential/CredentialPath'
import StudyModuleList from '../../../features/credential/StudyModuleList'
import StudySchoolList from '../../../features/credential/StudySchoolList'
import StudyTimetable from '../../../features/credential/StudyTimetable'
import StudyFAQ from '../../../features/credential/StudyFAQ'
import { StudyTransferCredit } from '../../../features/credential/StudyExtras'
import { CredentialCTA } from '../../../features/credential/CredentialCTA'

function StudyPage() {
  return (
    <PageLayout>
      <MainContainer>
        
        <CredentialPath active={1} />
        <Divider />

        <StudyModuleList />
        <StudyTransferCredit />
        <Divider />
        
        <StudySchoolList />
        <Divider />
        
        <StudyTimetable />
        <Divider />
        
        <StudyFAQ />
        <Divider />
        
        <CredentialCTA
          heading="พร้อมเริ่มต้นอบรมหรือยัง?"
          subtitle="สมัครสมาชิก TFPA และลงทะเบียนเรียนกับสถาบันที่รับรอง"
          primaryAction={{ label: 'เข้าสู่ระบบสมาชิกนักวางแผน', to: '/auth/login' }}
        />

      </MainContainer>
    </PageLayout>
  )
}

export default StudyPage
