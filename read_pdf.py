import PyPDF2

def extract_text(pdf_path):
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text

with open('resume_data.txt', 'w', encoding='utf-8') as f:
    try:
        f.write("--- ML RESUME ---\n")
        f.write(extract_text('public/P_D_Dinuk_ML_Resume.pdf'))
    except Exception as e:
        f.write(str(e))
    try:
        f.write("\n\n--- SE RESUME ---\n")
        f.write(extract_text('public/P_D_Dinuk_SE_Resume.pdf'))
    except Exception as e:
        f.write(str(e))
