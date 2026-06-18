export function ProfileField({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-0.5">{label}</p>
      <p className="text-sm text-gray-800 whitespace-pre-line">{value || '—'}</p>
    </div>
  )
}

export function ProfileSection({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-gray-800 font-[Prompt]">{title}</h3>
        <button className="text-gray-400 hover:text-brand-bright transition-colors" title="แก้ไข">✏️</button>
      </div>
      {children}
    </div>
  )
}

export function ProfileHeader({ profile }) {
  const initials = profile.firstNameTH.slice(0, 1) + profile.lastNameTH.slice(0, 1)
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5">
      <div className="w-20 h-20 rounded-full bg-brand-bright text-white text-2xl font-bold flex items-center justify-center shrink-0 font-[Prompt]">
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <h1 className="text-xl font-bold text-gray-900 font-[Prompt]">
          {profile.titleTH}{profile.firstNameTH} {profile.lastNameTH}
        </h1>
        <p className="text-sm text-gray-500">{profile.titleEN} {profile.firstNameEN} {profile.lastNameEN}</p>
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <span className="text-xs font-semibold bg-brand-bright/10 text-brand-bright px-2.5 py-0.5 rounded-full">{profile.memberId}</span>
          <span className="text-xs text-gray-400">สมาชิกตั้งแต่ {profile.memberSince}</span>
        </div>
      </div>
      <button className="text-gray-400 hover:text-brand-bright transition-colors shrink-0 text-lg" title="แก้ไขโปรไฟล์">✏️</button>
    </div>
  )
}

export function PersonalSection({ profile }) {
  return (
    <ProfileSection title="ข้อมูลส่วนตัว">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        <ProfileField label="ชื่อ-นามสกุล (ภาษาไทย)" value={`${profile.titleTH}${profile.firstNameTH} ${profile.lastNameTH}`} />
        <ProfileField label="ชื่อ-นามสกุล (ภาษาอังกฤษ)" value={`${profile.titleEN} ${profile.firstNameEN} ${profile.lastNameEN}`} />
        <ProfileField label="เพศ" value={profile.gender} />
        <ProfileField label="วันเกิด" value={profile.dob} />
        <ProfileField label="เลขบัตรประชาชน" value={profile.nationalId} />
      </div>
    </ProfileSection>
  )
}

export function ContactSection({ profile }) {
  return (
    <ProfileSection title="ข้อมูลติดต่อ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        <ProfileField label="อีเมล" value={profile.email} />
        <ProfileField label="เบอร์โทรศัพท์มือถือ" value={profile.mobile} />
      </div>
    </ProfileSection>
  )
}

function QualificationBadge({ q }) {
  return (
    <span className="text-xs font-semibold bg-blue-50 text-brand-bright px-2.5 py-1 rounded-full">{q}</span>
  )
}

export function ProfessionalSection({ profile }) {
  return (
    <ProfileSection title="ข้อมูลวิชาชีพ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        <ProfileField label="ภาคธุรกิจปัจจุบัน" value={profile.sector} />
        <div>
          <p className="text-xs text-gray-400 mb-1.5">คุณวุฒิวิชาชีพ</p>
          {profile.qualifications.length > 0
            ? <div className="flex flex-wrap gap-2">{profile.qualifications.map(q => <QualificationBadge key={q} q={q} />)}</div>
            : <p className="text-sm text-gray-800">—</p>
          }
        </div>
      </div>
    </ProfileSection>
  )
}

export function WorkAddressSection({ profile }) {
  return (
    <ProfileSection title="ที่อยู่ที่ทำงาน">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        <ProfileField label="ชื่อบริษัท / องค์กร" value={profile.companyName} />
        <ProfileField label="เบอร์โทรศัพท์ที่ทำงาน" value={profile.workPhone} />
        <div className="sm:col-span-2">
          <ProfileField label="ที่อยู่" value={profile.workAddress} />
        </div>
      </div>
    </ProfileSection>
  )
}

export function PostalAddressSection({ profile }) {
  return (
    <ProfileSection title="ที่อยู่สำหรับจัดส่งเอกสาร">
      <ProfileField label="ที่อยู่" value={profile.sameAsWork ? profile.workAddress : profile.postalAddress} />
      {profile.sameAsWork && (
        <p className="text-xs text-gray-400 mt-2">เหมือนกับที่อยู่ที่ทำงาน</p>
      )}
    </ProfileSection>
  )
}
