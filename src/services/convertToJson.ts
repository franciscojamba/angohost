export default function ConvertToJson(textResponse: string) {

    const result: any = {};
        const lines = textResponse.split('\n');

        let section: string | null = null;

        for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('Domain Not Available')) {
                result.domain_status = 'Not Available';
            } else if (trimmedLine.startsWith('Nameservers for')) {
                section = 'nameservers';
                result[section] = [];
            } else if (trimmedLine.startsWith('DNS records for')) {
                section = 'dns_records';
                result[section] = [];
            } else if (section === 'nameservers') {
                if (trimmedLine) {
                    result[section].push(trimmedLine);
                }
            } else if (section === 'dns_records') {
                if (trimmedLine) {
                    const parts = trimmedLine.split(/\s+/);
                    const record = {
                        host: parts[0],
                        type: parts[1],
                        value: parts[2] || ''
                    };
                    result[section].push(record);
                }
            }
        }

        return result;

    
}