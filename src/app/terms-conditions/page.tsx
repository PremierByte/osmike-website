import PageHeader from "@/components/ui/PageHeader";
import TermsConditionsSection from "@/components/sections/legal/TermsConditionsSection";

export const metadata = {
    title: "Terms & Conditions | OSMIKE BDM NIG LIMITED",
    description: "Read the terms and conditions for using the OSMIKE BDM NIG LIMITED website and services.",
};

export default function TermsConditionsPage() {
    return (
        <>
            <PageHeader
                title="Terms & Conditions"
                description="Please read these terms and conditions carefully before using our website."
                breadcrumbs={[{ label: "Terms & Conditions", href: "/terms-conditions" }]}
            />

            <TermsConditionsSection />
        </>
    );
}
