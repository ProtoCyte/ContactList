import vCardJS from vCardJS

const handleDownload = (contact) => {
    const vCard = vCardJS()
    vCard.firstName = contact.firstName
    vCard.lastName = contact.lastName
    vCard.organization = contact.organization
    vCard.title = contact.title
    vCard.workPhone = contact.phoneNumber
    vCard.workAddress = contact.address
    vCard.workEmail = contact.email
    vCard.note = contact.note

    const vCardString = vCard.getFormattedString()

  const blob = new Blob([vCardString]);
  const downloadUrl = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = downloadUrl;
  link.setAttribute('download', `${contact.firstName.replace(/\s+/g, '_')}_Contact_Info.vcf`);

  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
  }