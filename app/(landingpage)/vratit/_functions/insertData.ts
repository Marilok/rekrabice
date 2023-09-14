export default async function insertData(
  loopId: number,
  email: string,
  bankAccountPrefix: string,
  bankAccountNumber: string,
  bankCode: string,
  supabase: any,
) {
  console.log(loopId, email, bankAccountPrefix, bankAccountNumber, bankCode);

  const { data, error } = await supabase.from("loops_pairings").insert([
    {
      loop_id: loopId,
      email,
      bank_account_prefix: bankAccountPrefix,
      bank_account_number: bankAccountNumber,
      bank_code: bankCode,
    },
  ]);

  if (error) {
    throw error;
  }

  return data;
}
