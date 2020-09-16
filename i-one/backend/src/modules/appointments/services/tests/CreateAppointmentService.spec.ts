import AppError from '@shared/errors/AppError';

import FakeAppointmentRepository from '@modules/appointments/repositories/fakes/FakeAppointmentRepository';
import CreateAppointmentService from '../CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointService.execute({
      date: new Date(),
      provider_id: 'a1b2',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('a1b2');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointmentDate = new Date(1984, 3, 20, 11);

    await createAppointService.execute({
      date: appointmentDate,
      provider_id: 'a1b2',
    });

    expect(
      createAppointService.execute({
        date: appointmentDate,
        provider_id: 'a1b2',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
