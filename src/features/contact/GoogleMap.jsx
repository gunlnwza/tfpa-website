export default function GoogleMap() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm flex-1">
      <iframe
        src="https://maps.google.com/maps?q=13.763754,100.5678928&z=17&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block', minHeight: '360px' }}
        allowFullScreen=''
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ที่ตั้งสมาคมนักวางแผนการเงินไทย"
      />
    </div>
  )
}
