// import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentRepository';
import ListProviderAppointmentsService from '../ListProviderAppointmentsService';

let listProviderAppointments: ListProviderAppointmentsService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appoitment1 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user',

      date: new Date(2020, 4, 20, 8, 0, 0),
    });

    const appoitment2 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user',

      date: new Date(2020, 4, 20, 10, 0, 0),
    });

    const appointments = await listProviderAppointments.execute({
      provider_id: 'provider',
      month: 5,
      year: 2020,
      day: 20,
    });

    expect(appointments).toEqual([appoitment1, appoitment2]);
  });
});
